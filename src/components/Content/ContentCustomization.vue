<template>
  <div>
    <content-header
      text="Character Customization"
      :icon="require('@/assets/art/customization/icon.png')"
      color="rgb(150, 150, 150)"
    />
    <div class="content-container">
      <div class="row">
        <div class="col-12">
          <div class="content-block d-flex flex-column flex-md-row">
            <div class="body-icon flex-shrink-0">
              <player-display />
            </div>
            <div class="mt-2 mt-md-0 ml-2">
              <h6>Race</h6>
              <button
                class="btn mr-2"
                v-for="race in Object.entries(races)"
                :class="$store.getters['customization/race'] == race[0] ? 'btn-primary' : 'btn-outline-primary'"
                :key="race[0]"
                @click="$store.commit('customization/setRace', race[0])"
              >
                <img :src="race[1].icon" alt />
              </button>
              <h6 class="mt-3">Skin Color</h6>
              <color-setter class="color-setter" propPath="customization/skinColor" />

              <h6 class="mt-2">Hair</h6>
              <button
                class="btn mr-2 mb-2 hair"
                v-for="hair in Object.entries(hairOptions)"
                :class="$store.getters['customization/hair'] == hair[0] ? 'btn-primary' : 'btn-outline-primary'"
                :key="hair[0]"
                @click="$store.commit('customization/setHair', hair[0])"
              >
                <img :src="hair[1]" alt />
              </button>

              <h6 class="mt-3">Alien Top Color</h6>
              <color-setter class="color-setter" propPath="customization/lizardColor" />

                            <h6 class="mt-2">Lizard</h6>
              <button
                class="btn mr-2 mb-2 lizard"
                v-for="lizard in Object.entries(lizardOptions)"
                :class="$store.getters['customization/lizard'] == lizard[0] ? 'btn-primary' : 'btn-outline-primary'"
                :key="lizard[0]"
                @click="$store.commit('customization/setLizard', lizard[0])"
              >
                <img :src="lizard[1]" alt />
              </button>

              <h6 class="mt-3">Alien Bottom Color</h6>
              <color-setter class="color-setter" propPath="customization/mothColor" />

                            <h6 class="mt-2">Moth</h6>
              <button
                class="btn mr-2 mb-2 moth"
                v-for="moth in Object.entries(mothOptions)"
                :class="$store.getters['customization/moth'] == moth[0] ? 'btn-primary' : 'btn-outline-primary'"
                :key="moth[0]"
                @click="$store.commit('customization/setMoth', moth[0])"
              >
                <img :src="moth[1]" alt />
              </button>

              <h6 class="mt-3">Moth Color</h6>
              <color-setter class="color-setter" propPath="customization/mothColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import PlayerDisplay from "@/components/PlayerDisplay";
import ColorSetter from "@/components/ColorSetter";
import { RACES, HAIR, LIZARD, MOTH } from "@/data/customization";

export default {
  extends: ContentAbstract,
  components: { PlayerDisplay, ColorSetter },
  computed: {
    races() {
      return RACES;
    },
    hairOptions() {
      return HAIR;
    },
    lizardOptions() {
      return LIZARD;
    },
    mothOptions() {
      return MOTH;
    }
    
  }
};
</script>

<style scoped>
.body-icon {
  width: 256px;
  height: 256px;
  background-color: #ececec;
  border-radius: 0.5rem;
}

.color-setter {
	max-width: 200px;
}
.hair img {
	transform: scale(2)  translateY(6px);
	filter: brightness(.5);
}
</style>