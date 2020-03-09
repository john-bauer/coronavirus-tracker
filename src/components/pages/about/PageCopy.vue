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
