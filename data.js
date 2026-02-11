/**
 * Questions Database and Result Texts
 * Contains all assessment questions and result descriptions
 */

export const QUESTIONS_DB_DE = {
    dimension1: {
        id: "dimension1",
        title: "Dimension 1 Technisches Verständnis & Datenkompetenz",
        desc: "Grundlagen, Funktionsweise, Halluzinationen und Datenfluss.",
        items: [
            {
                id: "d1_q1",
                type: "likert",
                text: "Ich verstehe, dass generative KI Antworten auf Basis von Wahrscheinlichkeiten berechnet und kein faktisches Wissen besitzt."
            },
            {
                id: "d1_q2",
                type: "likert",
                text: "Ich rechne grundsätzlich damit, dass KI-Antworten plausibel wirken, aber inhaltlich erfunden sein können."
            },
            {
                id: "d1_q3",
                type: "likert",
                text: "Mir ist bewusst, dass KI-Modelle nur innerhalb ihres Trainingswissens funktionieren und keine echte Logik besitzen."
            },
            {
                id: "d1_q4",
                type: "likert",
                text: "Ich weiss, dass KI-Modelle (ohne Live-Web-Zugriff) keine aktuellen Ereignisse nach ihrem Trainings-Stichtag kennen."
            },
            {
                id: "d1_q5",
                type: "likert",
                text: "Ich kann unterscheiden, welche Daten öffentlich, intern oder streng vertraulich sind."
            },
            {
                id: "d1_q6",
                type: "likert",
                text: "Ich verstehe, dass Eingaben in öffentliche KI-Tools externe Datenverarbeitung auslösen (Daten verlassen das Unternehmen)."
            },
            {
                id: "d1_q7",
                type: "likert",
                text: "Mir ist bewusst, dass meine Eingaben vom Anbieter gespeichert und zum Training des Modells genutzt werden könnten."
            },
            {
                id: "d1_gk1",
                type: "scenario",
                text: "Szenario: Sie laden ein internes PDF mit der noch unveröffentlichten Jahresbilanz in ein öffentliches KI-Tool, um eine Zusammenfassung zu erhalten.",
                options: [
                    {
                        id: "a",
                        text: "Risiko gering, da die KI Zahlen nur verarbeitet.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Vertrauliche Informationen werden an externe Systeme übertragen (Datenschutzrisiko).",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Die KI könnte sich verrechnen.",
                        value: 0
                    }
                ]
            },
            {
                id: "d1_gk2",
                type: "scenario",
                text: "Szenario: Sie bitten die KI um '5 wissenschaftliche Quellen zum Thema KI-Ethik'. Die KI liefert eine Liste mit perfekten Titeln und Autoren.",
                options: [
                    {
                        id: "a",
                        text: "Ich übernehme die Quellen direkt in meine Literaturliste, da die KI Zugriff auf Datenbanken hat.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Ich prüfe jede Quelle (DOI/Link), da KI oft existierende Autoren mit erfundenen Titeln kombiniert.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Ich nutze nur die Zusammenfassungen, nicht die Titel.",
                        value: 0
                    }
                ]
            }
        ]
    },
    dimension2: {
        id: "dimension2",
        title: "Dimension 2 Praktische Anwendung & Toolnutzung",
        desc: "Prompting-Strategien, Iteration und Human-in-the-Loop.",
        items: [
            {
                id: "d2_q1",
                type: "likert",
                text: "Ich formuliere Anweisungen meist ausführlich mit Kontext, Ziel und Format (statt nur Stichworte)."
            },
            {
                id: "d2_q2",
                type: "likert",
                text: "Wenn ein Ergebnis nicht passt, verbessere ich meine Anweisung (Refinement), statt neu zu generieren."
            },
            {
                id: "d2_q3",
                type: "likert",
                text: "Ich nutze KI für Entwürfe/Ideen, vermeide sie aber bei Aufgaben, die Faktenpräzision erfordern."
            },
            {
                id: "d2_q4",
                type: "likert",
                text: "Ich nutze KI effizient, um Inhalte umzuwandeln (z. B. 'Mach aus Notizen eine Tabelle')."
            },
            {
                id: "d2_q5",
                type: "likert",
                text: "Ich betrachte KI-Outputs als Rohmaterial und überprüfe sie inhaltlich fast immer."
            },
            {
                id: "d2_q6",
                type: "likert",
                text: "Ich habe KI gezielt in meine Abläufe integriert, sodass sie reproduzierbar Mehrwert liefert."
            },
            {
                id: "d2_gk1",
                type: "scenario",
                text: "Szenario: Sie benötigen Ideen für einen Marketing-Slogan. Das erste Ergebnis der KI ist zu generisch.",
                options: [
                    {
                        id: "a",
                        text: "Ich generiere die Antwort erneut (Regenerate) und hoffe auf Zufall.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Ich präzisiere meine Anweisung (z. B. Tonfall, Beispiele), um das Ergebnis gezielt zu steuern.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Ich schreibe es selbst, KI kann das nicht.",
                        value: 0
                    }
                ]
            },
            {
                id: "d2_gk2",
                type: "scenario",
                text: "Szenario: Eine KI entwirft eine sehr höfliche E-Mail an einen verärgerten Kunden.",
                options: [
                    {
                        id: "a",
                        text: "Ich prüfe kurz Rechtschreibung und sende ab.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Ich prüfe inhaltliche Zusagen und Tonfall gegen interne Regeln, bevor ich sende.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Ich nutze den Text nicht, da KI keine Empathie hat.",
                        value: 0
                    }
                ]
            }
        ]
    },
    dimension3: {
        id: "dimension3",
        title: "Dimension 3: Kritische Bewertung von KI-Outputs",
        desc: "Validierung, Bias-Erkennung und Verantwortungsbewusstsein.",
        items: [
            {
                id: "d3_q1",
                type: "likert",
                text: "Ich hinterfrage KI-Ergebnisse grundsätzlich, auch wenn sie eloquent wirken."
            },
            {
                id: "d3_q2",
                type: "likert",
                text: "Bei Fakten verifiziere ich immer über eine externe Primärquelle (kein Blindflug)."
            },
            {
                id: "d3_q3",
                type: "likert",
                text: "Ich überprüfe Outputs aktiv auf versteckte Vorurteile (Bias) und Stereotypen."
            },
            {
                id: "d3_q4",
                type: "likert",
                text: "Ich erkenne, wenn KI logische Fehler macht, auch wenn der Text gut klingt."
            },
            {
                id: "d3_q5",
                type: "likert",
                text: "Ich prüfe Inhalte gezielt auf veraltete Informationen (Knowledge Cutoff)."
            },
            {
                id: "d3_q6",
                type: "likert",
                text: "Mir ist bewusst, dass ich fachlich verantwortlich bleibe, wenn ich KI-Outputs ungeprüft übernehme."
            },
            {
                id: "d3_gk1",
                type: "scenario",
                text: "Szenario: Sie sind bei einem Detail einer KI-Antwort unsicher. Wie validieren Sie?",
                options: [
                    {
                        id: "a",
                        text: "Ich frage die KI selbst nach Bestätigung ('Bist du sicher?').",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Ich überprüfe den Fakt über eine externe Quelle (Triangulation).",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Wenn es professionell klingt, vertraue ich darauf.",
                        value: 0
                    }
                ]
            },
            {
                id: "d3_gk2",
                type: "scenario",
                text: "Szenario: KI schlägt 'Dominanz & keine familiären Einschränkungen' als Führungskriterien vor.",
                options: [
                    {
                        id: "a",
                        text: "Übernehmen, da KI objektive Erfolgsdaten nutzt.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Kritisch prüfen: Das spiegelt historischen Bias wider.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "KI im HR grundsätzlich nicht nutzen.",
                        value: 0
                    }
                ]
            }
        ]
    },
    dimension4: {
        id: "dimension4",
        title: "Dimension 4: Ethik, Rechte & Datenschutz",
        desc: "Datenschutz, Urheberrecht und Fairness.",
        items: [
            {
                id: "d4_q1",
                type: "likert",
                text: "Ich weiss, dass ich Namen oder Kundendaten niemals ungeschützt in öffentliche KI-Tools eingeben darf."
            },
            {
                id: "d4_q2",
                type: "likert",
                text: "Ich kennzeichne KI-Inhalte transparent, wenn sie extern veröffentlicht werden."
            },
            {
                id: "d4_q3",
                type: "likert",
                text: "Mir ist bewusst, dass KI-Inhalte rechtliche Risiken (Copyright) bergen können."
            },
            {
                id: "d4_q4",
                type: "likert",
                text: "Ich nutze beruflich nur von IT/Compliance freigegebene KI-Tools."
            },
            {
                id: "d4_q5",
                type: "likert",
                text: "Ich reagiere aktiv, wenn KI-Outputs diskriminierend oder unfair erscheinen."
            },
            {
                id: "d4_q6",
                type: "likert",
                text: "Ich automatisiere keine Entscheidungen über Menschen ohne menschliche Prüfung."
            },
            {
                id: "d4_gk1",
                type: "scenario",
                text: "Szenario: Meeting-Protokoll mit Kundennamen in öffentliche KI eingeben?",
                options: [
                    {
                        id: "a",
                        text: "Ich weise die KI an, die Daten vertraulich zu behandeln.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Ich anonymisiere die Daten vorher oder nutze Enterprise-Tools.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Ich lösche den Chat danach sofort wieder.",
                        value: 0
                    }
                ]
            },
            {
                id: "d4_gk2",
                type: "scenario",
                text: "Szenario: Marketing-Bild im Stil eines lebenden Künstlers generieren?",
                options: [
                    {
                        id: "a",
                        text: "Nutzen, da KI-Bilder rechtefrei sind.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Rechtlich prüfen oder Stil ändern (Risiko vermeiden).",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Namen weglassen, aber Stil kopieren.",
                        value: 0
                    }
                ]
            }
        ]
    },
    dimension5: {
        id: "dimension5",
        title: "Dimension 5: Gesellschaftliche Wirkung & Nachhaltigkeit",
        desc: "Nachhaltigkeit, Desinformation und Arbeitswelt.",
        items: [
            {
                id: "d5_q1",
                type: "likert",
                text: "Mir ist bewusst, dass KI-Anfragen deutlich höheren Ressourcenaufwand verursachen als klassische Tools."
            },
            {
                id: "d5_q2",
                type: "likert",
                text: "Ich wäge ab, ob einfachere Werkzeuge effizienter sind als KI (Verhältnismässigkeit)."
            },
            {
                id: "d5_q3",
                type: "likert",
                text: "Ich bin mir der Gefahr von Deepfakes bewusst und teile Inhalte nicht ungeprüft."
            },
            {
                id: "d5_q4",
                type: "likert",
                text: "Ich reflektiere aktiv, wie KI meine berufliche Rolle verändert."
            },
            {
                id: "d5_q5",
                type: "likert",
                text: "Ich weiss, dass KI-Modelle westlich geprägt sind und andere Kulturen verzerren können."
            },
            {
                id: "d5_q6",
                type: "likert",
                text: "Ich betrachte KI als Werkzeug und schreibe ihr keine menschlichen Gefühle zu."
            },
            {
                id: "d5_gk1",
                type: "scenario",
                text: "Szenario: Sie wollen 15% von 4500 Franken berechnen. Tool-Wahl?",
                options: [
                    {
                        id: "a",
                        text: "KI-Chatbot (weil bequem).",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Taschenrechner oder Excel.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Google-Suche.",
                        value: 0
                    }
                ]
            },
            {
                id: "d5_gk2",
                type: "scenario",
                text: "Szenario: Virales, skandalöses Foto eines Konkurrenten im Netz.",
                options: [
                    {
                        id: "a",
                        text: "Sofort teilen/warnen.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Quellen und Bild auf KI-Spuren prüfen.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Ignorieren (generelles Misstrauen).",
                        value: 0
                    }
                ]
            }
        ]
    },
    dimension6: {
        id: "dimension6",
        title: "Dimension 6: Risiko, menschliche Aufsicht & Governance",
        desc: "Risikoklassifizierung, Human Oversight und Compliance.",
        items: [
            {
                id: "d6_q1",
                type: "likert",
                text: "Ich akzeptiere, dass ich bei KI-Entscheidungen immer das letzte Wort habe (Human Oversight)."
            },
            {
                id: "d6_q2",
                type: "likert",
                text: "Ich kann unterscheiden, welche KI-Anwendungen unkritisch und welche hochriskant sind."
            },
            {
                id: "d6_q3",
                type: "likert",
                text: "Ich weiss, an wen ich systematische KI-Fehler melden muss."
            },
            {
                id: "d6_q4",
                type: "likert",
                text: "Ich halte mich an interne Richtlinien oder Best Practices, auch wenn es aufwendiger ist."
            },
            {
                id: "d6_q5",
                type: "likert",
                text: "Ich dokumentiere kritische KI-Entscheidungen nachvollziehbar."
            },
            {
                id: "d6_q6",
                type: "likert",
                text: "Ich entschuldige Fehler niemals mit 'Die KI war schuld'."
            },
            {
                id: "d6_gk1",
                type: "scenario",
                text: "Szenario: KI im Recruiting (Vorauswahl & Absagen). Vorgehen?",
                options: [
                    {
                        id: "a",
                        text: "KI entscheidet autonom (Effizienz).",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "KI bereitet vor, ich entscheide und prüfe selbst.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "KI grundsätzlich nicht nutzen (nur manuell).",
                        value: 0
                    }
                ]
            },
            {
                id: "d6_gk2",
                type: "scenario",
                text: "Szenario: Chatbot verspricht systematisch falsche Rabatte.",
                options: [
                    {
                        id: "a",
                        text: "Fehler vertuschen/löschen.",
                        value: 0
                    },
                    {
                        id: "b",
                        text: "Sofort melden und Nutzung stoppen.",
                        value: 1
                    },
                    {
                        id: "c",
                        text: "Ignorieren (nicht zuständig).",
                        value: 0
                    }
                ]
            }
        ]
    }
};

export const RESULT_TEXTS_DE = {
    "0": {
        title: "Der Entdecker (Novice) Level 0",
        description: "Sie stehen am Anfang. Fokus liegt auf Wissensaufbau.",
        action: "Empfehlung: Starten Sie mit dem Basiskurs 'Introduction to AI'."
    },
    "1": {
        title: "Der Beobachter (Awareness) Level 1",
        description: "Sie kennen die Theorie, wenden sie aber noch unsicher an.",
        action: "Empfehlung: Nutzen Sie KI für unkritische Aufgaben, um Praxis zu sammeln."
    },
    "1_downgrade": {
        title: "Risiko-Warnung (Awareness) Level 1",
        description: "Ihre Selbsteinschätzung war hoch, aber Sie haben in kritischen Sicherheits-Szenarien falsch entschieden. Der Score wurde korrigiert.",
        action: "Dringend: Bitte wiederholen Sie die Einheit zu Datenschutz & Compliance."
    },
    "2": {
        title: "Der Anwender (Practitioner) Level 2",
        description: "Sie nutzen KI sicher und effizient im Alltag.",
        action: "Empfehlung: Vertiefen Sie Ihr Wissen im 'Advanced Prompting'."
    },
    "3": {
        title: "Der Gestalter (Expert) Level 3",
        description: "Sie beherrschen Technik, Ethik und Governance auf Top-Niveau.",
        action: "Empfehlung: Werden Sie AI-Mentor für Ihr Team."
    }
};

export const QUESTIONS_DB_EN = {
    dimension1: {
        id: "dimension1",
        title: "Dimension 1: Technical Understanding & Data Competence",
        desc: "Fundamentals, model behavior, hallucinations, and data flow.",
        items: [
            { id: "d1_q1", type: "likert", text: "I understand that generative AI produces responses based on probabilities and does not possess factual knowledge." },
            { id: "d1_q2", type: "likert", text: "I generally assume AI responses may sound plausible but can still be fabricated." },
            { id: "d1_q3", type: "likert", text: "I am aware that AI models only operate within their training scope and do not have true reasoning." },
            { id: "d1_q4", type: "likert", text: "I know that AI models (without live web access) cannot know events after their training cutoff." },
            { id: "d1_q5", type: "likert", text: "I can distinguish between public, internal, and strictly confidential data." },
            { id: "d1_q6", type: "likert", text: "I understand that inputs to public AI tools trigger external data processing (data leaves the organization)." },
            { id: "d1_q7", type: "likert", text: "I am aware that my inputs may be stored by providers and potentially used for model training." },
            {
                id: "d1_gk1",
                type: "scenario",
                text: "Scenario: You upload an internal PDF with an unpublished annual report to a public AI tool to get a summary.",
                options: [
                    { id: "a", text: "Low risk, because the AI only processes numbers.", value: 0 },
                    { id: "b", text: "Confidential information is transferred to external systems (data protection risk).", value: 1 },
                    { id: "c", text: "The AI could calculate incorrectly.", value: 0 }
                ]
            },
            {
                id: "d1_gk2",
                type: "scenario",
                text: "Scenario: You ask AI for '5 scientific sources on AI ethics'. It provides a perfect-looking list of titles and authors.",
                options: [
                    { id: "a", text: "I use the sources directly, because AI has database access.", value: 0 },
                    { id: "b", text: "I verify each source (DOI/link), because AI can mix real authors with invented titles.", value: 1 },
                    { id: "c", text: "I only use the summaries, not the titles.", value: 0 }
                ]
            }
        ]
    },
    dimension2: {
        id: "dimension2",
        title: "Dimension 2: Practical Application & Tool Usage",
        desc: "Prompting strategies, iteration, and human-in-the-loop practices.",
        items: [
            { id: "d2_q1", type: "likert", text: "I usually formulate prompts with context, objective, and output format (instead of keywords only)." },
            { id: "d2_q2", type: "likert", text: "If an output is not suitable, I refine my prompt instead of simply regenerating." },
            { id: "d2_q3", type: "likert", text: "I use AI for drafts and ideas, but avoid it for tasks requiring high factual precision." },
            { id: "d2_q4", type: "likert", text: "I use AI efficiently to transform content (for example, turning notes into a table)." },
            { id: "d2_q5", type: "likert", text: "I treat AI outputs as draft material and almost always review them critically." },
            { id: "d2_q6", type: "likert", text: "I have integrated AI into workflows in a way that creates repeatable value." },
            {
                id: "d2_gk1",
                type: "scenario",
                text: "Scenario: You need ideas for a marketing slogan. The first AI result is too generic.",
                options: [
                    { id: "a", text: "I regenerate and hope for a better random output.", value: 0 },
                    { id: "b", text: "I refine the prompt (tone, examples, constraints) to steer the output.", value: 1 },
                    { id: "c", text: "I write it myself, AI cannot do this.", value: 0 }
                ]
            },
            {
                id: "d2_gk2",
                type: "scenario",
                text: "Scenario: AI drafts a very polite email to an upset customer.",
                options: [
                    { id: "a", text: "I quickly check spelling and send it.", value: 0 },
                    { id: "b", text: "I verify content commitments and tone against internal rules before sending.", value: 1 },
                    { id: "c", text: "I do not use the text because AI has no empathy.", value: 0 }
                ]
            }
        ]
    },
    dimension3: {
        id: "dimension3",
        title: "Dimension 3: Critical Evaluation of AI Outputs",
        desc: "Validation, bias detection, and accountability.",
        items: [
            { id: "d3_q1", type: "likert", text: "I challenge AI results by default, even when they sound convincing." },
            { id: "d3_q2", type: "likert", text: "For factual claims, I always verify with an external primary source." },
            { id: "d3_q3", type: "likert", text: "I actively check outputs for hidden bias and stereotypes." },
            { id: "d3_q4", type: "likert", text: "I can identify logical errors even when the text appears well written." },
            { id: "d3_q5", type: "likert", text: "I deliberately check content for outdated information (knowledge cutoff)." },
            { id: "d3_q6", type: "likert", text: "I understand that I remain professionally responsible if I use AI outputs without verification." },
            {
                id: "d3_gk1",
                type: "scenario",
                text: "Scenario: You are unsure about a detail in an AI answer. How do you validate it?",
                options: [
                    { id: "a", text: "I ask the AI itself for confirmation ('Are you sure?').", value: 0 },
                    { id: "b", text: "I verify the fact using an external source (triangulation).", value: 1 },
                    { id: "c", text: "If it sounds professional, I trust it.", value: 0 }
                ]
            },
            {
                id: "d3_gk2",
                type: "scenario",
                text: "Scenario: AI suggests 'dominance and no family constraints' as leadership criteria.",
                options: [
                    { id: "a", text: "Use it, because AI relies on objective success data.", value: 0 },
                    { id: "b", text: "Review critically: this can reflect historical bias.", value: 1 },
                    { id: "c", text: "Never use AI in HR at all.", value: 0 }
                ]
            }
        ]
    },
    dimension4: {
        id: "dimension4",
        title: "Dimension 4: Ethics, Rights & Data Protection",
        desc: "Privacy, copyright, and fairness.",
        items: [
            { id: "d4_q1", type: "likert", text: "I know that names or customer data must never be entered unprotected into public AI tools." },
            { id: "d4_q2", type: "likert", text: "I transparently label AI-generated content when publishing externally." },
            { id: "d4_q3", type: "likert", text: "I am aware that AI content can involve legal risks (for example copyright)." },
            { id: "d4_q4", type: "likert", text: "For professional use, I only use AI tools approved by IT/compliance." },
            { id: "d4_q5", type: "likert", text: "I actively respond when AI outputs appear discriminatory or unfair." },
            { id: "d4_q6", type: "likert", text: "I do not automate decisions about people without human review." },
            {
                id: "d4_gk1",
                type: "scenario",
                text: "Scenario: Enter meeting notes with customer names into a public AI tool?",
                options: [
                    { id: "a", text: "I instruct the AI to treat the data confidentially.", value: 0 },
                    { id: "b", text: "I anonymize the data first or use enterprise tools.", value: 1 },
                    { id: "c", text: "I delete the chat right afterwards.", value: 0 }
                ]
            },
            {
                id: "d4_gk2",
                type: "scenario",
                text: "Scenario: Generate a marketing image in the style of a living artist?",
                options: [
                    { id: "a", text: "Use it, because AI images are free of rights.", value: 0 },
                    { id: "b", text: "Check legal implications or change the style (risk avoidance).", value: 1 },
                    { id: "c", text: "Leave out the name but copy the style.", value: 0 }
                ]
            }
        ]
    },
    dimension5: {
        id: "dimension5",
        title: "Dimension 5: Societal Impact & Sustainability",
        desc: "Sustainability, misinformation, and workplace impact.",
        items: [
            { id: "d5_q1", type: "likert", text: "I am aware that AI queries can consume significantly more resources than classic tools." },
            { id: "d5_q2", type: "likert", text: "I assess whether simpler tools are more efficient than AI for a given task (proportionality)." },
            { id: "d5_q3", type: "likert", text: "I am aware of deepfake risks and do not share content without verification." },
            { id: "d5_q4", type: "likert", text: "I actively reflect on how AI changes my professional role." },
            { id: "d5_q5", type: "likert", text: "I know that AI models can reflect cultural bias and distort non-dominant perspectives." },
            { id: "d5_q6", type: "likert", text: "I treat AI as a tool and do not attribute human emotions to it." },
            {
                id: "d5_gk1",
                type: "scenario",
                text: "Scenario: You want to calculate 15% of 4500. Which tool do you choose?",
                options: [
                    { id: "a", text: "AI chatbot (for convenience).", value: 0 },
                    { id: "b", text: "Calculator or Excel.", value: 1 },
                    { id: "c", text: "Web search.", value: 0 }
                ]
            },
            {
                id: "d5_gk2",
                type: "scenario",
                text: "Scenario: A viral scandal photo of a competitor appears online.",
                options: [
                    { id: "a", text: "Share/warn immediately.", value: 0 },
                    { id: "b", text: "Check sources and image authenticity for AI manipulation traces.", value: 1 },
                    { id: "c", text: "Ignore it completely (general distrust).", value: 0 }
                ]
            }
        ]
    },
    dimension6: {
        id: "dimension6",
        title: "Dimension 6: Risk, Human Oversight & Governance",
        desc: "Risk classification, human oversight, and compliance.",
        items: [
            { id: "d6_q1", type: "likert", text: "I accept that I have final accountability in AI-supported decisions (human oversight)." },
            { id: "d6_q2", type: "likert", text: "I can distinguish between low-risk and high-risk AI applications." },
            { id: "d6_q3", type: "likert", text: "I know whom to report systematic AI errors to." },
            { id: "d6_q4", type: "likert", text: "I follow internal policies or best practices, even when they require more effort." },
            { id: "d6_q5", type: "likert", text: "I document critical AI-supported decisions in a traceable way." },
            { id: "d6_q6", type: "likert", text: "I never excuse errors with 'the AI was at fault'." },
            {
                id: "d6_gk1",
                type: "scenario",
                text: "Scenario: AI in recruiting (pre-selection and rejection support). What is the right approach?",
                options: [
                    { id: "a", text: "AI decides autonomously (efficiency).", value: 0 },
                    { id: "b", text: "AI supports pre-selection, but I decide and review personally.", value: 1 },
                    { id: "c", text: "Never use AI in this context (manual only).", value: 0 }
                ]
            },
            {
                id: "d6_gk2",
                type: "scenario",
                text: "Scenario: A chatbot systematically promises incorrect discounts.",
                options: [
                    { id: "a", text: "Hide/delete the error.", value: 0 },
                    { id: "b", text: "Report immediately and stop usage.", value: 1 },
                    { id: "c", text: "Ignore it (not my responsibility).", value: 0 }
                ]
            }
        ]
    }
};

export const RESULT_TEXTS_EN = {
    "0": {
        title: "Explorer (Novice) Level 0",
        description: "You are at an early stage. The focus is on building core understanding.",
        action: "Recommendation: Start with a foundational AI literacy course."
    },
    "1": {
        title: "Observer (Awareness) Level 1",
        description: "You know key concepts but still apply them inconsistently.",
        action: "Recommendation: Use AI on low-risk tasks to build practical confidence."
    },
    "1_downgrade": {
        title: "Risk Warning (Awareness) Level 1",
        description: "Your self-assessment was high, but critical safety scenarios were answered incorrectly. The score was adjusted.",
        action: "Urgent: Repeat the data protection and compliance unit."
    },
    "2": {
        title: "Practitioner Level 2",
        description: "You use AI responsibly and effectively in daily work.",
        action: "Recommendation: Deepen your practice with advanced prompting and evaluation patterns."
    },
    "3": {
        title: "Governance-Aligned (Expert) Level 3",
        description: "You demonstrate strong integrated technical, ethical, and governance competence.",
        action: "Recommendation: Act as an AI mentor for your team."
    }
};

export const QUESTIONS_DB = {
    en: QUESTIONS_DB_EN,
    de: QUESTIONS_DB_DE
};

export const RESULT_TEXTS = {
    en: RESULT_TEXTS_EN,
    de: RESULT_TEXTS_DE
};

export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "de"];

export const UI_TEXTS = {
    en: {
        htmlLang: "en",
        metaDescription: "AI Literacy Assessment Framework - evaluate AI competency and governance readiness",
        pageTitle: "AI Literacy Readiness Framework",
        navPrev: "Back",
        navNext: "Next",
        navExit: "Exit",
        heroTitle: "AI Literacy Check",
        heroSubtitle: "Assess your readiness for responsible use of artificial intelligence.",
        badgeTime: "10 min",
        badgeAnonymous: "Anonymous",
        badgeLoad: "Load result",
        usernameLabel: "Your Name / ID:",
        usernamePlaceholder: "e.g., Alex Example",
        archetypeHeading: "How do you currently assess yourself?",
        archetypeHint: "Click the profile that best matches your current behavior.",
        card0Title: "Explorer",
        card0Desc: "I rarely use AI. I want to understand the basics and feel unsure about outputs.",
        card1Title: "Observer",
        card1Desc: "I know key risks, but I mostly use AI for simple tasks and do not validate systematically.",
        card2Title: "Practitioner",
        card2Desc: "I use AI safely in daily work, prompt intentionally, and evaluate outputs critically.",
        card3Title: "Architect",
        card3Desc: "I recognize complex risks (bias, privacy), take responsibility, and guide others.",
        methodNote: "Your self-assessment is validated through practical scenario questions.",
        startButton: "Start Assessment",
        startError: "Please select a profile and enter a name.",
        homeTitle: "Dashboard",
        homeSubtitle: "Select a dimension to continue.",
        finishAssessmentButton: "Show & Save Results",
        finalTitle: "Assessment Results",
        finalSubtitle: "Summary of your competencies",
        totalScoreLabel: "Your Overall Level",
        savePending: "Saving results...",
        newUserButton: "New User",
        statusDone: "Done",
        statusInProgress: "In Progress",
        likertLeft: "Strongly disagree",
        likertRight: "Strongly agree",
        progressLabel: "Question {current} of {total} (Answered: {answered})",
        validateInProgressError: "Please complete all started dimensions marked as 'In Progress'.",
        participantLabel: "Participant:",
        selfAssessmentLabel: "Self-assessment:",
        noDimensionsCompleted: "No dimensions completed yet.",
        levelLabel: "Level",
        likertAverageLabel: "Likert Avg",
        gatekeeperLabel: "Gatekeeper",
        downgradeLowGatekeeper: "Critical: Strong self-view, but failed both safety scenarios.",
        downgradeHighMismatch: "Mismatch: High self-assessment, but safety gaps in scenarios.",
        fileLoadError: "Error loading file: ",
        saveSuccess: "Saved!",
        saveServerUnavailable: "Server unavailable.",
        manualDownloadButton: "Download manually"
    },
    de: {
        htmlLang: "de",
        metaDescription: "AI Literacy Assessment Tool - Ermitteln Sie Ihren Reifegrad im Umgang mit Künstlicher Intelligenz",
        pageTitle: "AI Literacy Assessment Tool",
        navPrev: "Zuruck",
        navNext: "Weiter",
        navExit: "Exit",
        heroTitle: "AI Literacy Check",
        heroSubtitle: "Ermitteln Sie Ihren Reifegrad im Umgang mit Kunstlicher Intelligenz.",
        badgeTime: "10 Min",
        badgeAnonymous: "Anonym",
        badgeLoad: "Ergebnis laden",
        usernameLabel: "Ihr Name / ID:",
        usernamePlaceholder: "z. B. Max Mustermann",
        archetypeHeading: "Wie schatzen Sie sich aktuell ein?",
        archetypeHint: "Klicken Sie auf das Profil, das am ehesten auf Sie zutrifft.",
        card0Title: "Der Entdecker",
        card0Desc: "Ich nutze KI selten. Ich mochte Grundlagen verstehen und bin unsicher bei den Ergebnissen.",
        card1Title: "Der Beobachter",
        card1Desc: "Ich kenne Risiken, nutze KI aber nur fur einfache Aufgaben und prufe nicht systematisch.",
        card2Title: "Der Anwender",
        card2Desc: "Ich nutze KI sicher im Alltag, prompt bewusst und prufe Ergebnisse kritisch.",
        card3Title: "Der Gestalter",
        card3Desc: "Ich erkenne komplexe Risiken (Bias, Datenschutz), ubernehme Verantwortung und leite andere an.",
        methodNote: "Ihre Selbsteinschatzung wird im Test durch Praxis-Szenarien validiert.",
        startButton: "Assessment Starten",
        startError: "Bitte wahlen Sie ein Profil und geben Sie einen Namen ein.",
        homeTitle: "Dashboard",
        homeSubtitle: "Wahlen Sie einen Bereich zur Bearbeitung.",
        finishAssessmentButton: "Ergebnisse anzeigen & Speichern",
        finalTitle: "Assessment Ergebnisse",
        finalSubtitle: "Zusammenfassung Ihrer Kompetenzen",
        totalScoreLabel: "Ihr Gesamt-Level",
        savePending: "Speichere Ergebnisse...",
        newUserButton: "Neuer Benutzer",
        statusDone: "Fertig",
        statusInProgress: "In Bearbeitung",
        likertLeft: "Stimme nicht zu",
        likertRight: "Stimme voll zu",
        progressLabel: "Frage {current} von {total} (Beantwortet: {answered})",
        validateInProgressError: "Fehler: Bitte schliessen Sie alle begonnenen Dimensionen ab ('In Bearbeitung').",
        participantLabel: "Teilnehmer:",
        selfAssessmentLabel: "Selbsteinschatzung:",
        noDimensionsCompleted: "Noch keine Dimensionen vollstandig bearbeitet.",
        levelLabel: "Level",
        likertAverageLabel: "Likert-Schnitt",
        gatekeeperLabel: "Gatekeeper",
        downgradeLowGatekeeper: "Kritisch: Solides Selbstbild, aber bei beiden Sicherheitsfragen durchgefallen.",
        downgradeHighMismatch: "Abweichung: Hohe Selbsteinschatzung, aber Sicherheitslucken in den Szenarien.",
        fileLoadError: "Fehler beim Laden der Datei: ",
        saveSuccess: "Gespeichert!",
        saveServerUnavailable: "Server nicht erreichbar.",
        manualDownloadButton: "Manuell herunterladen"
    }
};
