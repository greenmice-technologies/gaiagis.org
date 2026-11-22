---
title: "Where population estimates concentrate"
description: "Follow a reproducible Natural Earth example that puts a population query, its results, and a world map together in a Gaia GIS notebook."
translationKey: use-case-population-notebook
contentStatus: canonical-en
cover: /images/use-cases/population-comparison.svg
coverAlt: "Bar chart comparing the six largest population groups in the bundled Natural Earth data"
coverCaption: "The sample concentrates most population estimates in Asia. The complete report preserves all eight source groups and the calculation behind the comparison."
category: Analysis
exampleType: Open-data demonstration
deliverable: "Outputs: analysis report, CSV results, and source data"
download:
  url: /downloads/use-cases/natural-earth-population.html
  label: Read the analysis report
weight: 20
---

How do population estimates compare across the geographic groups in a sample dataset? This Natural Earth example puts the question, the calculation, and the map together in a Gaia GIS notebook so readers can see where the figures come from.

**[Read the complete analysis report](/downloads/use-cases/natural-earth-population.html)** · [Download the results as CSV](/downloads/use-cases/natural-earth-population.csv)

The companion report contains a comparison chart, all grouped results, the calculation, and source limitations. It was calculated directly from the bundled data; it is not a Gaia notebook export.

## Give the figures geographic context

The [tutorial GeoPackage](/downloads/tutorials/natural_earth.gpkg) contains country polygons, coastlines, boundaries, disputed areas, and populated places. The country layer supplies the population estimates. The populated places are shown on the map for context and are not used in the calculation.

## Keep the query alongside the result

The notebook groups the country layer's records by `CONTINENT` and adds their `POP_EST` values. In the example workspace, the query uses the table name `NECOUNTRIES`. If you import the tutorial file, use the table name assigned to its `countries` layer in your workspace.

```sql
SELECT CONTINENT, COUNT(*) AS records, SUM(POP_EST) AS population
FROM NECOUNTRIES
GROUP BY CONTINENT
ORDER BY population DESC;
```

<img class="screenshot" src="/images/use-cases/natural-earth-query.webp" alt="A Gaia GIS notebook with a population query, its result table, and a world map of populated places" width="1440" height="900" loading="lazy" decoding="async">

The three largest totals in the bundled file are Asia (4.57 billion), Africa (1.31 billion), and Europe (746 million), after rounding. These totals describe the figures and grouping in the sample file. The count is the number of source records in each group, which can include territories and other mapped entities.

## Interpret the comparison

The totals show the distribution of estimates across the source's continent groups. They do not explain population density, growth, or differences within each group. Those questions require different calculations and, for change over time, comparable observations from more than one period.

The complete results also include the source's “Seven seas (open ocean)” and “Antarctica” groups. Keeping these visible makes the aggregation easier to audit than silently excluding records.

## Sources and limitations

**Source:** [Natural Earth](https://www.naturalearthdata.com/), as bundled in the tutorial GeoPackage. **Calculation checked:** 20 November 2026, directly against that file. The downloadable report records the file's SHA-256 checksum.

The upstream dataset release has not been established here. The review date is not the reference year of the estimates, and these figures are not current official population statistics. Source records can include territories and other mapped entities; group assignments follow the source. Fractional estimates are retained in the CSV.

## Deliver an analysis readers can follow

Use the result table for readers who want to inspect the figures and a chart for those who want a quick comparison. Keep the query and the data source in the notebook so readers can see what went into the result. When the analysis is ready, a Gaia GIS notebook can be published with a workspace or exported as HTML or PDF.

[Explore notebooks](/en/product/notebook/) · [Create a workspace with the sample data](/en/tutorials/01-first-workspace/) · [Browse all use cases](/en/use-cases/)
