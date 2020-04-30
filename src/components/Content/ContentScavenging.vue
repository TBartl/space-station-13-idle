<template>
  <div class="content-scavenging">
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />
  </div>
</template>

<script>
import { JOB } from "@/data/scavenging";
import ContentAbstract from "@/components/Content/ContentAbstract";
export default {
  extends: ContentAbstract,
  computed: {
    job() {
      return JOB;
    }
  }
};
</script>
