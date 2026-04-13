---
title: 'MCP-Server in der Produktion: Grenzen, die wichtig sind'
description: Wie wir über Model Context Protocol-Integrationen denken, wenn Systeme
  reguliert sind und Ausfälle teuer sind.
translationKey: labs-mcp
date: 2026-04-01
---
MCP ist eine starke Idee: Standardisierung der Art und Weise, wie Tools den Agenten Funktionen zur Verfügung stellen. In der Produktion behandeln die Gewinnerteams MCP-Server wie **jede andere privilegierte Integration**.

### Designregeln, die wir verwenden

- Standardmäßig **geringste Privilegien**: enge Bereiche, explizite Anmeldeinformationen, kurzlebige Token, sofern möglich.
- **Überprüfbare Aktionen**: Protokollieren Sie Absichten, Eingaben und Ergebnisse – nicht nur „Erfolg/Misserfolg“.
- **Versionierte Verträge**: Schema- und Funktionsänderungen sind explizit; Stiller Bruch ist inakzeptabel.
- **Fehlerisolierung**: Ein Werkzeugausfall sollte nicht die gesamte Automatisierungsoberfläche beeinträchtigen.

### Was wir messen

Latenzverteilungen, Fehlerbudgets pro Tool und Regressionssuiten für kritische Arbeitsabläufe – insbesondere, wenn ein Agent mehrere Anrufe verketten darf.

Wenn Sie MCP für eine Unternehmensumgebung evaluieren, beginnen Sie mit der Bedrohungsmodellierung und der Betriebsverantwortung – nicht mit der Demo.