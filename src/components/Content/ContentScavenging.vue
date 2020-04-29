<template>
  <div class="content-scavenging">
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />
  </div>
</template>

<script>
import SCAVENGING from "@/constants/scavenging";
import ContentAbstract from "@/components/Content/ContentAbstract";
export default {
  extends: ContentAbstract,
  computed: {
    job() {
      return SCAVENGING;
    }
  }
};
</script>
