<template>
  <div class="shitposting">
    <content-header :text="job.name" :icon="job.icon" :color="job.color" />
    <div class="content-container">
      <div class="row mb-2">
        <div class="col-md-8 col-lg-9 col-xl-10">
          <experience-header :color="job.color" :jobId="jobId" />
        </div>
        <div class="col-md-4 col-lg-3 col-xl-2">
          <potion-header :jobId="jobId" />
        </div>
      </div>

      <job-info
        infoId="shitposting"
        :icon="require('@/assets/art/jobinfo/shitposting.png')"
        title="Iamgoofball the Shit Poster says..."
        :options="[
					{name: 'Back'},
					{name: 'Shitposting?', icon: require('@/assets/art/shitposting/icon.png'), iconClass:'mx--1'},
					{name: 'OK?'},
					{name: '...'},
					{name: 'I\'m leaving now'},
				]"
      >
        <template slot="Back">
          <span>Discord ID and (if not the same) your commonly used names: iamgoofball#2327
Banning admin (if known): Nervere
Time ban was placed (approximate): 11:17 PM GMT+0
Your side of the story: well i was angry posting because my portfolio just got fucking disappeared by one of your fucking stupid ass community members and told a few people to off themselves, nervere told me to stop so i did but a few times it slipped out because some douchebag level motherfuckers were baiting me hardcore, i edited most of them to just be normal insults in post but forgot one
Why you think you should be unbanned: yeah i'm pretty fucking mad that people can abuse the shit out of me in discord but when i fight back with equally caustic shit i get banned but you know i was editing away the "hang yourself"s</span>
        </template>
        <template slot="Shitposting?">
          <span>addendum for background info:
i woke up today to find out that my github account that is critical to my portfolio was flagged and therefore suspended, this is apparently an automated process now according to other coders for codebases, so i came onto the discord incredibly angry(and still am because holy shit) because my 6 years of work is now in fucking limbo disappeared, github doesn't provide any ban reasons for their suspensions, and it's fucking trash christ
</span>
        </template>
        <template slot="OK?">
          <span>I have a plan that I'm not revealing publicly until I've started enacting it, because the corrupt pigs in the administration have made it perfectly clear they're going to obstruct like a republican congress when a black guy's in charge. Fuck you, you're not getting details until I'm ramming it in.</span>
        </template>
        <template slot="...">
          <span>Yeah and I'm pretty sure the community is tired of your shit, dude. You kramer in with these garbage goddamn goal post shifts like some kind of corrupt shitbag. You've actively shifted the goal posts in this thread three goddamn times. I don't know why the fuck you and the administration insist on fucking with me like this. I just wanna contribute to fucking ss13 and be able to speak with the players. Then you let them run roughshod all over me, let them call me homophobic slurs, call me ableist slurs, let them tell me to commit suicide, and then when I finally go "okay, the suicide thing was over the line because the tg admins told me that's over the line" and I try to follow decorum by requesting a moderator step in to de-escalate the situation, you go "WHOA THERE HOW DARE YOU REPORT THE GUY TELLING YOU TO KILL YOURSELF" then make up three different bullshit reasons to ban me, switching to the next when they get disproved.

If this ban is about ban baiting, then the ban is invalid because I'm not fucking ban baiting, and ban baiting isn't a rule on the discord servers anyways so, Jesus christ dude.

If this ban is about drama stirring, then the ban is invalid because I filed proper procedure and directly reported a violation of the Discord TOS, the Server Rules, and the Literal Fucking Thing I Got Banned For 2 Years For to the moderators, and then got banned for it. There was no drama stirring. The only person stirring drama here is you, MSO, by fucking digging in your heels and refusing to accept that maybe the headmins made a bad fucking call and banned me for an illegitimate reason.

If this ban is about my history, then the ban is invalid because as laid out in this thread, I'm the victim of the headmins using me as a fucking whipping post with false accusations of doxxing and false accusations of asking rshoe to ddos the server. And if we're only talking discord history here, the ban is invalid because my serious discord history is "got banned for telling people to kill themselves, successfully appealed, then got banned because I reported someone who told me to kill myself".

Stop acting like a child, MSO. Because this is the sort of underhanded sketchy as fuck bullshit I expect from an underage hippie station player, not the grown ass adult host of /tg/station. I grew up. Why can't you?</span>
        </template>
        <template slot="I'm leaving now">
          <span>And additionally, talking to players about PRs that will impact them should really not be cited as "shilling" and a problem. Players need to know what changes are coming down the pipeline.

</span>
        </template>
      </job-info>

      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-3 col-xl-2"
          v-for="[actionId, action] in viewableActions"
          :key="actionId"
        >
          <generic-action
            :jobId="jobId"
            :actionName="'DISCUSS'"
            :action="action"
            :actionId="actionId"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findLastIndex } from "lodash";
import { JOB } from "@/data/shitposting";
import ContentAbstract from "@/components/Content/ContentAbstract";
import ExperienceHeader from "@/components/Content/ExperienceHeader";
import PotionHeader from "@/components/Content/PotionHeader";
import GenericAction from "@/components/Content/GenericAction";
import { mapState } from "vuex";
export default {
  extends: ContentAbstract,
  components: { GenericAction, ExperienceHeader, PotionHeader },
  computed: {
    jobId() {
      return "shitposting";
    },
    job() {
      return JOB;
    },
    viewableActions() {
      return this.$store.getters[this.jobId + "/filteredActionEntries"];
    }
  }
};
</script>

<style scoped>
</style>