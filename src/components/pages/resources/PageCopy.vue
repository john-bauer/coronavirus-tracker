<template>
  <div>
    <SectionTitle title="Sources" />
    <div class="content">
      <ul type="1">
        <li>
          <a
            href="https://systems.jhu.edu/research/public-health/ncov/"
            target="_blank"
            ><span class="is-italic">"Mapping 2019-nCoV"</span></a
          >, Johns Hopkins University
        </li>
        <li>
          <a
            href="https://github.com/ExpDev07/coronavirus-tracker-api"
            target="_blank"
            ><span class="is-italic">"Coronavirus Tracker API"</span></a
          >,
          <a href="https://github.com/ExpDev07/coronavirus-tracker-api"
            >ExpDev07</a
          >
        </li>
      </ul>
      <b-notification type="is-warning" :closable="false" role="alert">
        <b-icon icon="alert" size="is-small"></b-icon>The API does have a slight
        delay compared to the Johns Hopkins data, so this app's totals will
        often be slightly lower than theirs.
      </b-notification>
    </div>
    <SectionTitle title="Additional Resources" />
    <div class="content">
      <ul type="1">
        <li>
          <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
            target="_blank"
            ><span class="is-italic"
              >"Coronavirus Disease 2019 (COVID-19) Outbreak"</span
            ></a
          >, World Health Organization
        </li>
        <li>
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
            target="_blank"
            ><span class="is-italic"
              >"Coronavirus Disease 2019 (COVID-19)"</span
            ></a
          >, Centers for Disease Control and Prevention (CDC)
        </li>
      </ul>
    </div>
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
