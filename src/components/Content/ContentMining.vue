<template>
  <div class="content-mining">
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />
  </div>
</template>

<script>
import MINING from "@/constants/mining";
import ContentAbstract from "@/components/Content/ContentAbstract";
export default {
  extends: ContentAbstract,
  computed: {
    job() {
      return MINING;
    }
  }
};
</script>
