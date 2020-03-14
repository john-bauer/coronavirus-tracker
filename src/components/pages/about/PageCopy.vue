<template>
  <div>
    <SectionTitle title="About this Project" />
    <p class="subtitle is-size-7-touch">
      After reading about the Johns Hopkins
      <a
        href="https://systems.jhu.edu/research/public-health/ncov/"
        target="_blank"
        >Mapping 2019-nCoV</a
      >
      project, I was surprised to find all of their reports available on
      <a href="https://github.com/CSSEGISandData/COVID-19">GitHub</a>. I dug
      through some of the issues, and realized that someone had created and
      open-sourced a
      <a href="https://github.com/ExpDev07/coronavirus-tracker-api">REST API</a>
      for it.
    </p>
    <p class="subtitle is-size-7-touch">
      Johns Hopkins did an incredible job with their data visualization project,
      so this is an attempt to present the same data in some different and
      potentially useful ways.
    </p>
    <SectionTitle title="Backlog" />
    <p class="subtitle is-size-7-touch">
      This project is still in-progress. Here are some
      features/defects/modifications on the horizon:
    </p>
    <div class="content">
      <ul type="1">
        <li>
          Multiline chart for historical changes in cases, confirmed, deaths.
          (global)
        </li>
        <li>
          Multiline chart for historical changes in cases, confirmed, deaths.
          (by country)
        </li>
        <li><strike>Implement Mapbox GL with hotspots by location</strike></li>
        <li><strike>Add resources page to study, CDC info, etc.</strike></li>
        <li>Refactor snapshots</li>
        <li>
          Write util functions for getting countries, counting confirmed,
          recovered, deaths, etc.
        </li>
        <li><strike>Diagnose & fix tile padding discrepancy</strike></li>
        <li>improve zoom behavior on map view</li>
      </ul>
    </div>
    <br />
    <SectionTitle title="Contribution & Use" />
    <p class="subtitle is-size-7-touch">
      If you have any suggestions, spot a defect, or see improvements that can
      be made, I'm all ears. Open up a PR or create an issue and we'll work
      together on making this better. License is MIT. Feel free to use this
      source code in your own projects.
    </p>
    <a
      href="https://github.com/john-bauer/coronavirus-data-visualization"
      target="_blank"
    >
      <b-button type="is-github" icon-left="github-circle">Explore</b-button>
    </a>
  </div>
</template>

<script>
import SectionTitle from "@/components/ui/SectionTitle.vue";

export default {
  name: "PageCopy",
  components: {
    SectionTitle
  }
};
</script>

<style scoped lang="scss"></style>
