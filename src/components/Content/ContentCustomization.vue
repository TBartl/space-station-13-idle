<template>
  <div>
    <content-header
      text="Player"
      :icon="require('@/assets/art/customization/icon.png')"
      color="rgb(150, 150, 150)"
    />
    <div class="content-container">
      <div class="row">
        <div class="col-12">
          <div class="content-block d-flex flex-column flex-md-row">
            <div class="body-icon flex-shrink-0">
              <player-display :showEquipment="equipment" />
            </div>
            <div class="mt-2 mt-md-0 ml-2">
              <div class="btn-group mb-2">
                <div
                  class="btn"
                  :class="equipment ? 'btn-primary' : 'btn-outline-primary'"
                  @click="equipment=true"
                >Equipment</div>
                <div
                  class="btn"
                  :class="!equipment ? 'btn-primary' : 'btn-outline-primary'"
                  @click="equipment=false"
                >Customization</div>
              </div>
              <div v-if="equipment">
                <equipment-panel />
              </div>
              <div v-else>
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

                <div v-if="race.skinColor" class="mt-3">
                  <h6>Skin Color</h6>
                  <color-setter
                    class="color-setter"
                    propPath="customization/skinColor"
                    :presets="skinColors"
                  />
                </div>

                <div v-if="race.hair" class="mt-3">
                  <h6>Hair Style</h6>
                  <button
                    class="btn mr-2 mb-2 hair"
                    v-for="hair in Object.entries(hairOptions)"
                    :class="$store.getters['customization/hair'] == hair[0] ? 'btn-primary' : 'btn-outline-primary'"
                    :key="hair[0]"
                    @click="$store.commit('customization/setHair', hair[0])"
                  >
                    <img :src="hair[1]" alt />
                  </button>
                </div>

                <div v-if="race.skinColor" class="mt-3">
                  <h6>Hair Color</h6>
                  <color-setter
                    class="color-setter"
                    propPath="customization/hairColor"
                    :presets="vividColors"
                  />
                </div>

                <div v-if="race.scaleColor" class="mt-3">
                  <h6>Scale Color</h6>
                  <color-setter
                    class="color-setter"
                    propPath="customization/scaleColor"
                    :presets="vividColors"
                  />
                </div>

                <div v-if="race.horns" class="mt-3">
                  <h6>Horns</h6>
                  <button
                    class="btn mr-2 mb-2 hair"
                    v-for="horn in Object.entries(hornOptions)"
                    :class="$store.getters['customization/horns'] == horn[0] ? 'btn-primary' : 'btn-outline-primary'"
                    :key="horn[0]"
                    @click="$store.commit('customization/setHorns', horn[0])"
                  >
                    <img :src="horn[1]" alt />
                  </button>
                </div>

                <div v-if="race.frills" class="mt-3">
                  <h6>Frills</h6>
                  <button
                    class="btn mr-2 mb-2 hair"
                    v-for="frill in Object.entries(frillOptions)"
                    :class="$store.getters['customization/frills'] == frill[0] ? 'btn-primary' : 'btn-outline-primary'"
                    :key="frill[0]"
                    @click="$store.commit('customization/setFrills', frill[0])"
                  >
                    <img :src="frill[1]" alt />
                  </button>
                </div>

                <div v-if="race.moth" class="mt-3">
                  <h6>Style</h6>
                  <button
                    class="btn mr-2 mb-2"
                    v-for="moth in Object.entries(mothOptions)"
                    :class="$store.getters['customization/moth'] == moth[0] ? 'btn-primary' : 'btn-outline-primary'"
                    :key="moth[0]"
                    @click="$store.commit('customization/setMoth', moth[0])"
                  >
                    <img :src="moth[1].body" alt />
                  </button>
                </div>
              </div>
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
import EquipmentPanel from "@/components/Content/Combat/EquipmentPanel";
import {
  RACES,
  HAIR,
  HORNS,
  FRILLS,
  MOTH,
  SKIN_COLORS,
  VIVID_COLORS
} from "@/data/customization";

export default {
  extends: ContentAbstract,
  components: { PlayerDisplay, ColorSetter, EquipmentPanel },
  data() {
    return {
      equipment: true
    };
  },
  computed: {
    races() {
      return RACES;
    },
    race() {
      return RACES[this.$store.getters["customization/race"]];
    },
    skinColors() {
      return SKIN_COLORS;
    },
    vividColors() {
      return VIVID_COLORS;
    },
    hairOptions() {
      return HAIR;
    },
    hornOptions() {
      return HORNS;
    },
    frillOptions() {
      return FRILLS;
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
  transform: scale(2) translateY(6px);
  filter: brightness(0.5);
}
</style>