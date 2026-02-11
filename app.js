import {
    QUESTIONS_DB,
    RESULT_TEXTS,
    UI_TEXTS,
    DEFAULT_LANGUAGE,
    SUPPORTED_LANGUAGES
} from "./data.js";

/**
 * AI Literacy Assessment Application
 * Main application logic for managing the assessment flow
 */

// Constants
const SCREENS = {
    LANDING: 'landing',
    HOME: 'home',
    QUIZ: 'quiz',
    FINAL: 'final'
};

const SESSION_STATUS = {
    IN_PROGRESS: 'in-progress',
    COMPLETED: 'completed'
};

const QUESTION_TYPES = {
    LIKERT: 'likert',
    SCENARIO: 'scenario'
};

const LIKERT_SCALE = [1, 2, 3, 4, 5];
const UI_UPDATE_DELAY = 100;
const SCORE_THRESHOLDS = {
    LOW: 2.5,
    MEDIUM: 3.9
};
const GATEKEEPER_MAX = 2;

// DOM Element IDs
const ELEMENT_IDS = {
    USERNAME: 'username',
    START_BTN: 'start-btn',
    ERROR_MSG: 'error-msg',
    LANGUAGE_SELECT: 'language-select',
    HOME_GRID: 'home-grid',
    QUESTION_CONTAINER: 'question-container',
    HEADER_PROGRESS: 'header-progress',
    NAV_HEADER: 'nav-header',
    FINAL_RESULTS_CONTAINER: 'final-results-container',
    FINAL_USER_SUMMARY: 'final-user-summary',
    TOTAL_SCORE_VAL: 'total-score-val',
    SAVE_STATUS: 'save-status'
};

/**
 * Main application object
 */
const app = {
    /**
     * Application state
     */
    state: {
        user: {
            name: "",
            selfAssessment: null
        },
        currentDimension: null,
        currentStepIndex: 0,
        questionList: [],
        sessions: {},
        language: DEFAULT_LANGUAGE,
        currentScreen: SCREENS.LANDING
    },

    /**
     * Initialize the application
     */
    init: function() {
        this.state.language = this.getInitialLanguage();
        this.applyStaticTranslations();
        this.syncLanguageSelector();
        this.showScreen(SCREENS.LANDING);
        this.attachEventListeners();
    },

    /**
     * Attach event listeners to DOM elements
     */
    attachEventListeners: function() {
        const nameInput = document.getElementById(ELEMENT_IDS.USERNAME);
        if (nameInput) {
            nameInput.addEventListener('input', this.validateStart.bind(this));
        }
        const languageSelect = document.getElementById(ELEMENT_IDS.LANGUAGE_SELECT);
        if (languageSelect) {
            languageSelect.addEventListener('change', (event) => {
                this.setLanguage(event.target.value);
            });
        }
    },

    getInitialLanguage: function() {
        const savedLanguage = localStorage.getItem('ai_literacy_language');
        if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
            return savedLanguage;
        }
        return DEFAULT_LANGUAGE;
    },

    getQuestionsDB: function() {
        return QUESTIONS_DB[this.state.language] || QUESTIONS_DB[DEFAULT_LANGUAGE];
    },

    getResultTexts: function() {
        return RESULT_TEXTS[this.state.language] || RESULT_TEXTS[DEFAULT_LANGUAGE];
    },

    getUiText: function(key) {
        const languageTexts = UI_TEXTS[this.state.language] || UI_TEXTS[DEFAULT_LANGUAGE];
        return languageTexts[key] || key;
    },

    setLanguage: function(language) {
        if (!SUPPORTED_LANGUAGES.includes(language)) return;
        this.state.language = language;
        localStorage.setItem('ai_literacy_language', language);
        this.applyStaticTranslations();
        this.syncLanguageSelector();
        this.renderAfterLanguageChange();
    },

    syncLanguageSelector: function() {
        const languageSelect = document.getElementById(ELEMENT_IDS.LANGUAGE_SELECT);
        if (languageSelect) {
            languageSelect.value = this.state.language;
        }
    },

    applyStaticTranslations: function() {
        const updateText = (id, text) => {
            const element = document.getElementById(id);
            if (element) element.textContent = text;
        };

        const updatePlaceholder = (id, text) => {
            const element = document.getElementById(id);
            if (element) element.placeholder = text;
        };

        const htmlLanguage = this.getUiText('htmlLang');
        document.documentElement.lang = htmlLanguage;
        document.title = this.getUiText('pageTitle');

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', this.getUiText('metaDescription'));
        }

        updateText('btn-prev-text', this.getUiText('navPrev'));
        updateText('btn-next-text', this.getUiText('navNext'));
        updateText('btn-exit-text', this.getUiText('navExit'));
        updateText('hero-title', this.getUiText('heroTitle'));
        updateText('hero-subtitle', this.getUiText('heroSubtitle'));
        updateText('badge-time-text', this.getUiText('badgeTime'));
        updateText('badge-anonymous-text', this.getUiText('badgeAnonymous'));
        updateText('badge-load-text', this.getUiText('badgeLoad'));
        updateText('username-label', this.getUiText('usernameLabel'));
        updatePlaceholder(ELEMENT_IDS.USERNAME, this.getUiText('usernamePlaceholder'));
        updateText('archetype-heading', this.getUiText('archetypeHeading'));
        updateText('archetype-hint', this.getUiText('archetypeHint'));
        updateText('card-0-title', this.getUiText('card0Title'));
        updateText('card-0-desc', this.getUiText('card0Desc'));
        updateText('card-1-title', this.getUiText('card1Title'));
        updateText('card-1-desc', this.getUiText('card1Desc'));
        updateText('card-2-title', this.getUiText('card2Title'));
        updateText('card-2-desc', this.getUiText('card2Desc'));
        updateText('card-3-title', this.getUiText('card3Title'));
        updateText('card-3-desc', this.getUiText('card3Desc'));
        updateText('method-note-text', this.getUiText('methodNote'));
        updateText(ELEMENT_IDS.START_BTN, this.getUiText('startButton'));
        updateText(ELEMENT_IDS.ERROR_MSG, this.getUiText('startError'));
        updateText('home-title', this.getUiText('homeTitle'));
        updateText('home-subtitle', this.getUiText('homeSubtitle'));
        updateText('finish-assessment-btn', this.getUiText('finishAssessmentButton'));
        updateText('final-title', this.getUiText('finalTitle'));
        updateText('final-subtitle', this.getUiText('finalSubtitle'));
        updateText('total-score-label', this.getUiText('totalScoreLabel'));
        updateText('save-status-text', this.getUiText('savePending'));
        updateText('new-user-btn', this.getUiText('newUserButton'));
    },

    renderAfterLanguageChange: function() {
        if (this.state.currentScreen === SCREENS.HOME) {
            this.renderHome();
            return;
        }
        if (this.state.currentScreen === SCREENS.QUIZ) {
            this.renderQuestion();
            this.updateNavButtons();
            return;
        }
        if (this.state.currentScreen === SCREENS.FINAL) {
            const container = document.getElementById(ELEMENT_IDS.FINAL_RESULTS_CONTAINER);
            const summary = document.getElementById(ELEMENT_IDS.FINAL_USER_SUMMARY);
            if (container && summary) {
                container.innerHTML = '';
                this.renderUserSummary(summary);
                this.renderDimensionResults(container);
                this.calculateAndDisplayTotalScore();
            }
        }
    },

    /**
     * Load assessment results from a JSON file
     * @param {HTMLInputElement} input - File input element
     */
    loadResultFromFile: function(input) {
        const file = input.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                this.restoreStateFromFile(data);
                this.displayResultsAfterLoad();
            } catch (error) {
                this.handleFileLoadError(error);
            }
        };
        reader.readAsText(file);
    },

    /**
     * Restore application state from loaded file data
     * @param {Object} data - Parsed JSON data from file
     */
    restoreStateFromFile: function(data) {
        this.state.user = data.user || this.state.user;
        this.state.sessions = {};

        if (data.results) {
            for (const [dimensionId, resultData] of Object.entries(data.results)) {
                this.state.sessions[dimensionId] = {
                    status: SESSION_STATUS.COMPLETED,
                    answers: resultData.raw_answers || {}
                };
            }
        }
    },

    /**
     * Display results screen after loading file
     */
    displayResultsAfterLoad: function() {
        setTimeout(() => {
            this.showFinalResults();
            const saveStatus = document.getElementById(ELEMENT_IDS.SAVE_STATUS);
            if (saveStatus) {
                saveStatus.style.display = 'none';
            }
        }, UI_UPDATE_DELAY);
    },

    /**
     * Handle file loading errors
     * @param {Error} error - Error object
     */
    handleFileLoadError: function(error) {
        alert(this.getUiText('fileLoadError') + error.message);
        console.error("File load error:", error);
    },

    /**
     * Select an archetype/self-assessment level
     * @param {number} level - Assessment level (0-3)
     * @param {HTMLElement} element - Clicked card element
     */
    selectArchetype: function(level, element) {
        this.state.user.selfAssessment = level;
        this.updateArchetypeSelection(element);
        this.validateStart();
    },

    /**
     * Update visual selection of archetype cards
     * @param {HTMLElement} selectedElement - Selected card element
     */
    updateArchetypeSelection: function(selectedElement) {
        const cards = document.querySelectorAll('.selectable-card');
        cards.forEach(card => card.classList.remove('selected'));
        selectedElement.classList.add('selected');
    },

    /**
     * Validate if start button should be enabled
     */
    validateStart: function() {
        const nameInput = document.getElementById(ELEMENT_IDS.USERNAME);
        const startButton = document.getElementById(ELEMENT_IDS.START_BTN);
        const errorMessage = document.getElementById(ELEMENT_IDS.ERROR_MSG);

        if (!nameInput || !startButton) return;

        const nameValue = nameInput.value.trim();
        const hasLevel = this.state.user.selfAssessment !== null;
        const isValid = nameValue.length > 0 && hasLevel;

        startButton.disabled = !isValid;
        if (errorMessage) {
            errorMessage.style.display = isValid ? 'none' : 'block';
        }
    },

    /**
     * Start the assessment
     */
    startAssessment: function() {
        const nameInput = document.getElementById(ELEMENT_IDS.USERNAME);
        if (!nameInput) return;

        const nameValue = nameInput.value.trim();
        if (!nameValue || this.state.user.selfAssessment === null) {
            const errorMessage = document.getElementById(ELEMENT_IDS.ERROR_MSG);
            if (errorMessage) {
                errorMessage.style.display = 'block';
            }
            return;
        }

        this.state.user.name = nameValue;
        this.renderHome();
        this.showScreen(SCREENS.HOME);
    },

    /**
     * Render the home screen with dimension cards
     */
    renderHome: function() {
        const grid = document.getElementById(ELEMENT_IDS.HOME_GRID);
        if (!grid) return;

        grid.innerHTML = '';

        const questionsDb = this.getQuestionsDB();
        Object.values(questionsDb).forEach(dimension => {
            const cardElement = this.createDimensionCard(dimension);
            grid.appendChild(cardElement);
        });
    },

    /**
     * Create a dimension card element
     * @param {Object} dimension - Dimension data object
     * @returns {HTMLElement} Card element
     */
    createDimensionCard: function(dimension) {
        const card = document.createElement('div');
        card.className = 'dim-card';
        card.onclick = () => this.startDimension(dimension.id);

        const session = this.state.sessions[dimension.id];
        this.applyDimensionCardStatus(card, session);

        card.innerHTML += `
            <h3>${dimension.title}</h3>
            <p>${dimension.desc}</p>
        `;

        return card;
    },

    /**
     * Apply status styling to dimension card
     * @param {HTMLElement} card - Card element
     * @param {Object} session - Session data
     */
    applyDimensionCardStatus: function(card, session) {
        if (session && session.status === SESSION_STATUS.COMPLETED) {
            card.classList.add('status-green');
            card.innerHTML += `<span class="status-badge">${this.getUiText('statusDone')}</span>`;
        } else if (session && Object.keys(session.answers).length > 0) {
            card.classList.add('status-yellow');
            card.innerHTML += `<span class="status-badge">${this.getUiText('statusInProgress')}</span>`;
        }
    },

    /**
     * Start a dimension assessment
     * @param {string} dimensionId - Dimension identifier
     */
    startDimension: function(dimensionId) {
        const questionsDb = this.getQuestionsDB();
        if (!questionsDb[dimensionId]) {
            console.error(`Dimension ${dimensionId} not found in QUESTIONS_DB`);
            return;
        }
        this.state.currentDimension = dimensionId;
        this.state.questionList = questionsDb[dimensionId].items;
        this.state.currentStepIndex = 0;

        if (!this.state.sessions[dimensionId]) {
            this.state.sessions[dimensionId] = {
                answers: {},
                status: SESSION_STATUS.IN_PROGRESS
            };
        }

        this.showScreen(SCREENS.QUIZ);
        this.renderQuestion();
        this.updateNavButtons();
    },

    /**
     * Show a specific screen
     * @param {string} screenName - Name of the screen to show
     */
    showScreen: function(screenName) {
        this.state.currentScreen = screenName;
        document.querySelectorAll('.content-area').forEach(element => {
            element.classList.add('hidden');
        });

        const navHeader = document.getElementById(ELEMENT_IDS.NAV_HEADER);
        if (navHeader) {
            navHeader.classList.add('hidden');
        }

        const targetScreen = document.getElementById(`screen-${screenName}`);
        if (targetScreen) {
            targetScreen.classList.remove('hidden');
        }

        if (screenName === SCREENS.QUIZ && navHeader) {
            navHeader.classList.remove('hidden');
        }
    },

    /**
     * Get current dimension's answers
     * @returns {Object} Answers object
     */
    getCurrentAnswers: function() {
        if (!this.state.currentDimension) {
            return {};
        }
        const session = this.state.sessions[this.state.currentDimension];
        return session ? session.answers : {};
    },

    /**
     * Render the current question
     */
    renderQuestion: function() {
        const container = document.getElementById(ELEMENT_IDS.QUESTION_CONTAINER);
        if (!container) return;

        const question = this.state.questionList[this.state.currentStepIndex];
        if (!question) return;

        const answers = this.getCurrentAnswers();
        const html = this.buildQuestionHTML(question, answers);

        container.innerHTML = html;
        this.updateHeaderProgress();
    },

    /**
     * Build HTML for a question
     * @param {Object} question - Question data object
     * @param {Object} answers - Current answers
     * @returns {string} HTML string
     */
    buildQuestionHTML: function(question, answers) {
        let html = `<div class="question-text">${question.text}</div>`;

        if (question.type === QUESTION_TYPES.LIKERT) {
            html += this.buildLikertHTML(question, answers);
        } else if (question.type === QUESTION_TYPES.SCENARIO) {
            html += this.buildScenarioHTML(question, answers);
        }

        return html;
    },

    /**
     * Build HTML for Likert scale question
     * @param {Object} question - Question data object
     * @param {Object} answers - Current answers
     * @returns {string} HTML string
     */
    buildLikertHTML: function(question, answers) {
        const savedValue = answers[question.id] || null;
        const buttons = LIKERT_SCALE.map(value => {
            const isSelected = savedValue == value ? 'selected' : '';
            return `
                <div class="likert-btn ${isSelected}" 
                     onclick="app.selectOption('${question.id}', ${value}, this)">
                    ${value}
                </div>
            `;
        }).join('');

        return `
            <div class="likert-container">
                <div class="likert-buttons">${buttons}</div>
                <div class="likert-labels">
                    <span class="likert-label-left">${this.getUiText('likertLeft')}</span>
                    <span class="likert-label-right">${this.getUiText('likertRight')}</span>
                </div>
            </div>
        `;
    },

    /**
     * Build HTML for scenario question
     * @param {Object} question - Question data object
     * @param {Object} answers - Current answers
     * @returns {string} HTML string
     */
    buildScenarioHTML: function(question, answers) {
        const savedValue = answers[question.id];
        const options = question.options.map(option => {
            const isSelected = savedValue == option.value ? 'selected' : '';
            const isChecked = savedValue == option.value ? 'checked' : '';
            return `
                <div class="scenario-option ${isSelected}" 
                     onclick="app.selectScenarioOption('${question.id}', ${option.value}, this)">
                    <input type="radio" name="scen" ${isChecked}>
                    <span>${option.text}</span>
                </div>
            `;
        }).join('');

        return `<div class="scenario-container">${options}</div>`;
    },

    /**
     * Handle Likert option selection
     * @param {string} questionId - Question identifier
     * @param {number} value - Selected value
     * @param {HTMLElement} buttonElement - Clicked button element
     */
    selectOption: function(questionId, value, buttonElement) {
        const answers = this.getCurrentAnswers();
        answers[questionId] = value;

        const siblings = buttonElement.parentElement.children;
        for (let sibling of siblings) {
            sibling.classList.remove('selected');
        }
        buttonElement.classList.add('selected');

        this.updateHeaderProgress();
    },

    /**
     * Handle scenario option selection
     * @param {string} questionId - Question identifier
     * @param {number} value - Selected value
     * @param {HTMLElement} divElement - Clicked div element
     */
    selectScenarioOption: function(questionId, value, divElement) {
        const answers = this.getCurrentAnswers();
        answers[questionId] = value;

        const container = divElement.parentElement;
        const options = container.querySelectorAll('.scenario-option');
        options.forEach(option => {
            option.classList.remove('selected');
            const input = option.querySelector('input');
            if (input) {
                input.checked = false;
            }
        });

        divElement.classList.add('selected');
        const input = divElement.querySelector('input');
        if (input) {
            input.checked = true;
        }

        this.updateHeaderProgress();
    },

    /**
     * Update progress display in header
     */
    updateHeaderProgress: function() {
        const progressElement = document.getElementById(ELEMENT_IDS.HEADER_PROGRESS);
        if (!progressElement) return;

        const total = this.state.questionList.length;
        const answers = this.getCurrentAnswers();
        const answeredCount = Object.keys(answers).length;
        const currentQuestion = this.state.currentStepIndex + 1;

        const progressText = this.getUiText('progressLabel')
            .replace('{current}', String(currentQuestion))
            .replace('{total}', String(total))
            .replace('{answered}', String(answeredCount));
        progressElement.innerText = progressText;
    },

    /**
     * Update navigation buttons state
     */
    updateNavButtons: function() {
        const prevButton = document.getElementById('btn-prev');
        const nextButton = document.getElementById('btn-next');

        if (prevButton) {
            prevButton.disabled = this.state.currentStepIndex === 0;
        }

        if (nextButton) {
            const isLastQuestion = this.state.currentStepIndex >= this.state.questionList.length - 1;
            nextButton.disabled = false; // Always enabled, will finish if last
        }
    },

    /**
     * Navigate to previous question
     */
    prevQuestion: function() {
        if (this.state.currentStepIndex > 0) {
            this.state.currentStepIndex--;
            this.renderQuestion();
            this.updateNavButtons();
        }
    },

    /**
     * Navigate to next question
     */
    nextQuestion: function() {
        if (this.state.currentStepIndex < this.state.questionList.length - 1) {
            this.state.currentStepIndex++;
            this.renderQuestion();
            this.updateNavButtons();
        } else {
            this.finishCurrentDimension();
        }
    },

    /**
     * Finish current dimension assessment
     */
    finishCurrentDimension: function() {
        if (this.state.currentDimension) {
            const session = this.state.sessions[this.state.currentDimension];
            if (session) {
                session.status = SESSION_STATUS.COMPLETED;
            }
        }
        this.renderHome();
        this.showScreen(SCREENS.HOME);
    },

    /**
     * Exit current assessment and return to home
     */
    exitAssessment: function() {
        if (!this.state.currentDimension) {
            this.renderHome();
            this.showScreen(SCREENS.HOME);
            return;
        }

        const answers = this.getCurrentAnswers();
        const total = this.state.questionList.length;
        const session = this.state.sessions[this.state.currentDimension];

        if (session && Object.keys(answers).length === total) {
            session.status = SESSION_STATUS.COMPLETED;
        }

        this.renderHome();
        this.showScreen(SCREENS.HOME);
    },

    /**
     * Show final results screen
     */
    showFinalResults: function() {
        if (!this.validateAllDimensionsCompleted()) {
            return;
        }

        const container = document.getElementById(ELEMENT_IDS.FINAL_RESULTS_CONTAINER);
        const summary = document.getElementById(ELEMENT_IDS.FINAL_USER_SUMMARY);
        if (!container || !summary) return;

        container.innerHTML = '';
        this.renderUserSummary(summary);
        this.renderDimensionResults(container);
        this.calculateAndDisplayTotalScore();

        this.showScreen(SCREENS.FINAL);
        this.saveResultsToLocalServer();
    },

    /**
     * Validate that all started dimensions are completed
     * @returns {boolean} True if validation passes
     */
    validateAllDimensionsCompleted: function() {
        for (const [dimensionId, session] of Object.entries(this.state.sessions)) {
            if (session.status === SESSION_STATUS.IN_PROGRESS) {
                alert(this.getUiText('validateInProgressError'));
                return false;
            }
        }
        return true;
    },

    /**
     * Render user summary section
     * @param {HTMLElement} summaryElement - Summary element
     */
    renderUserSummary: function(summaryElement) {
        const selfAssessmentLevel = this.state.user.selfAssessment;
        const resultTexts = this.getResultTexts();
        const levelText = resultTexts[selfAssessmentLevel];
        const levelTitle = levelText ? levelText.title : `Level ${selfAssessmentLevel}`;

        summaryElement.innerHTML = `
            <strong>${this.getUiText('participantLabel')}</strong> ${this.state.user.name}<br>
            <strong>${this.getUiText('selfAssessmentLabel')}</strong> ${levelTitle}
        `;
    },

    /**
     * Render results for all dimensions
     * @param {HTMLElement} container - Container element
     */
    renderDimensionResults: function(container) {
        let dimensionsProcessed = 0;

        for (const [dimensionId, session] of Object.entries(this.state.sessions)) {
            if (session.status !== SESSION_STATUS.COMPLETED && 
                Object.keys(session.answers).length === 0) {
                continue;
            }

            dimensionsProcessed++;
            const result = this.calculateDimensionScore(dimensionId, session.answers);
            const dimensionInfo = this.getQuestionsDB()[dimensionId];
            const resultCard = this.createResultCard(dimensionInfo, result);
            container.appendChild(resultCard);
        }

        if (dimensionsProcessed === 0) {
            container.innerHTML = `<p>${this.getUiText('noDimensionsCompleted')}</p>`;
        }
    },

    /**
     * Create a result card element
     * @param {Object} dimensionInfo - Dimension information
     * @param {Object} result - Calculated result
     * @returns {HTMLElement} Result card element
     */
    createResultCard: function(dimensionInfo, result) {
        const card = document.createElement('div');
        card.className = 'result-card';

        const resultText = this.getResultText(result);
        const warningHTML = result.downgradeReason 
            ? `<div class="warning-text">⚠️ <strong>${result.downgradeReason}</strong></div>` 
            : '';

        card.innerHTML = `
            <h3>${dimensionInfo.title} <span class="score-display">${this.getUiText('levelLabel')} ${result.level}</span></h3>
            <div class="level-summary-sentence">${resultText.title}</div>
            <p><em>${this.getUiText('likertAverageLabel')}: ${result.meanScore.toFixed(1)} | ${this.getUiText('gatekeeperLabel')}: ${result.gatekeeperScore}/${GATEKEEPER_MAX}</em></p>
            <p>${resultText.description}</p>
            <p class="action-text">${resultText.action}</p>
            ${warningHTML}
        `;

        return card;
    },

    /**
     * Get result text object based on result level and downgrade status
     * @param {Object} result - Calculated result
     * @returns {Object} Result text object
     */
    getResultText: function(result) {
        const texts = this.getResultTexts();
        if (result.downgraded && texts[`${result.level}_downgrade`]) {
            return texts[`${result.level}_downgrade`];
        }
        return texts[String(result.level)] || texts["0"];
    },

    /**
     * Calculate and display total score
     */
    calculateAndDisplayTotalScore: function() {
        const totalScoreElement = document.getElementById(ELEMENT_IDS.TOTAL_SCORE_VAL);
        if (!totalScoreElement) return;

        let dimensionsProcessed = 0;
        let levelSum = 0;

        for (const [dimensionId, session] of Object.entries(this.state.sessions)) {
            if (session.status !== SESSION_STATUS.COMPLETED && 
                Object.keys(session.answers).length === 0) {
                continue;
            }

            dimensionsProcessed++;
            const result = this.calculateDimensionScore(dimensionId, session.answers);
            levelSum += result.level;
        }

        if (dimensionsProcessed === 0) {
            totalScoreElement.innerText = "-";
        } else {
            const average = levelSum / dimensionsProcessed;
            totalScoreElement.innerText = average.toFixed(1);
        }
    },

    /**
     * Calculate score for a dimension
     * @param {string} dimensionId - Dimension identifier
     * @param {Object} answers - User answers
     * @returns {Object} Score result object
     */
    calculateDimensionScore: function(dimensionId, answers) {
        const questionsDb = this.getQuestionsDB();
        if (!questionsDb[dimensionId]) {
            console.error(`Dimension ${dimensionId} not found in QUESTIONS_DB`);
            return {
                level: 0,
                meanScore: 0,
                gatekeeperScore: 0,
                downgradeReason: null,
                downgraded: false
            };
        }
        const questions = questionsDb[dimensionId].items;
        let likertSum = 0;
        let likertCount = 0;
        let gatekeeperScore = 0;

        questions.forEach(question => {
            if (answers[question.id] === undefined) return;

            if (question.type === QUESTION_TYPES.LIKERT) {
                likertSum += parseInt(answers[question.id], 10);
                likertCount++;
            } else if (question.type === QUESTION_TYPES.SCENARIO) {
                gatekeeperScore += parseInt(answers[question.id], 10);
            }
        });

        const meanScore = likertCount > 0 ? (likertSum / likertCount) : 0;
        const levelResult = this.calculateLevel(meanScore, gatekeeperScore);

        return {
            level: levelResult.level,
            meanScore: meanScore,
            gatekeeperScore: gatekeeperScore,
            downgradeReason: levelResult.downgradeReason,
            downgraded: levelResult.downgraded
        };
    },

    /**
     * Calculate level based on mean score and gatekeeper score
     * @param {number} meanScore - Average Likert score
     * @param {number} gatekeeperScore - Gatekeeper scenario score
     * @returns {Object} Level result with downgrade info
     */
    calculateLevel: function(meanScore, gatekeeperScore) {
        if (meanScore < SCORE_THRESHOLDS.LOW) {
            return { level: 0, downgradeReason: null, downgraded: false };
        }

        if (meanScore >= SCORE_THRESHOLDS.LOW && meanScore <= SCORE_THRESHOLDS.MEDIUM) {
            if (gatekeeperScore === 0) {
                return {
                    level: 1,
                    downgradeReason: this.getUiText('downgradeLowGatekeeper'),
                    downgraded: true
                };
            }
            return { level: 2, downgradeReason: null, downgraded: false };
        }

        // meanScore > 3.9
        if (gatekeeperScore === GATEKEEPER_MAX) {
            return { level: 3, downgradeReason: null, downgraded: false };
        }

        return {
            level: 2,
            downgradeReason: this.getUiText('downgradeHighMismatch'),
            downgraded: true
        };
    },

    /**
     * Save results to local server
     */
    saveResultsToLocalServer: async function() {
        const statusBox = document.getElementById(ELEMENT_IDS.SAVE_STATUS);
        if (!statusBox) return;

        statusBox.style.display = 'block';

        const data = this.prepareResultsData();

        try {
            const response = await fetch('/save-result', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const responseJson = await response.json();
                this.displaySaveSuccess(statusBox, responseJson.path);
            } else {
                throw new Error(this.getUiText('saveServerUnavailable'));
            }
        } catch (error) {
            console.error("Save error:", error);
            this.displaySaveError(statusBox);
        }
    },

    /**
     * Prepare results data for saving
     * @returns {Object} Data object to save
     */
    prepareResultsData: function() {
        const totalScoreElement = document.getElementById(ELEMENT_IDS.TOTAL_SCORE_VAL);
        const averageLevel = totalScoreElement ? totalScoreElement.innerText : "0.0";

        const data = {
            user: this.state.user,
            timestamp: new Date().toISOString(),
            results: {},
            averageLevel: averageLevel
        };

        for (const [dimensionId, session] of Object.entries(this.state.sessions)) {
            if (session.status === SESSION_STATUS.COMPLETED) {
                data.results[dimensionId] = this.calculateDimensionScore(dimensionId, session.answers);
                data.results[dimensionId].raw_answers = session.answers;
            }
        }

        return data;
    },

    /**
     * Display save success message
     * @param {HTMLElement} statusBox - Status box element
     * @param {string} filePath - Saved file path
     */
    displaySaveSuccess: function(statusBox, filePath) {
        statusBox.innerHTML = `
            <span class="status-icon" style="color:var(--success-color)">&#10004;</span>
            <div class="status-text" style="font-weight:bold; color:var(--success-color)">${this.getUiText('saveSuccess')}</div>
            <div class="path-text">${filePath}</div>
        `;
    },

    /**
     * Display save error message with fallback download
     * @param {HTMLElement} statusBox - Status box element
     */
    displaySaveError: function(statusBox) {
        statusBox.innerHTML = `
            <span class="status-icon" style="color:var(--warning-color)">⚠️</span>
            <div class="status-text">${this.getUiText('saveServerUnavailable')}</div>
            <button class="download-btn" onclick="app.manualDownload()">${this.getUiText('manualDownloadButton')}</button>
        `;
    },

    /**
     * Manual download fallback when server is unavailable
     */
    manualDownload: function() {
        const data = {
            user: this.state.user,
            timestamp: new Date().toISOString(),
            results: {},
            averageLevel: document.getElementById(ELEMENT_IDS.TOTAL_SCORE_VAL)?.innerText || "0.0"
        };

        for (const [dimensionId, session] of Object.entries(this.state.sessions)) {
            if (session.status === SESSION_STATUS.COMPLETED) {
                data.results[dimensionId] = this.calculateDimensionScore(dimensionId, session.answers);
                data.results[dimensionId].raw_answers = session.answers;
            }
        }

        const dataStr = "data:text/json;charset=utf-8," + 
            encodeURIComponent(JSON.stringify(data, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `AI_Assessment_${this.state.user.name}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    }
};

// Expose app to global scope for inline event handlers
window.app = app;

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
