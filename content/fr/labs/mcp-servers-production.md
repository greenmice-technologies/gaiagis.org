---
title: 'Serveurs MCP en production : des limites qui comptent'
description: Comment nous réfléchissons aux intégrations du Model Context Protocol
  lorsque les systèmes sont réglementés et que les pannes coûtent cher.
translationKey: labs-mcp
date: 2026-04-01
---
MCP est une idée forte : standardiser la manière dont les outils exposent les capacités aux agents. En production, les équipes gagnantes traitent les serveurs MCP comme **toute autre intégration privilégiée**.

### Règles de conception que nous utilisons

- **Moins de privilèges** par défaut : portées étroites, informations d'identification explicites, jetons de courte durée lorsque cela est possible.
- **Actions auditables** : consigner l'intention, les entrées et les résultats, et pas seulement « succès/échec ».
- **Contrats versionnés** : les modifications de schéma et de capacités sont explicites ; la casse silencieuse est inacceptable.
- **Isolement des pannes** : une panne d'outil ne doit pas détruire toute la surface d'automatisation.

### Ce que nous mesurons

Distributions de latence, budgets d'erreur par outil et suites de régression pour les flux de travail critiques, en particulier lorsqu'un agent est autorisé à enchaîner plusieurs appels.

Si vous évaluez MCP pour un environnement d'entreprise, commencez par la modélisation des menaces et la propriété opérationnelle, et non par la démo.