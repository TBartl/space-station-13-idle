<template>
  <div>
    <content-header
      text="About"
      :icon="require('@/assets/art/misc/logo-square.png')"
      color="rgb(150, 150, 150)"
    />
    <div class="content-container">
      <div class="row">
        <div class="col-12">
          <div class="content-block">
            <h4 class="mb-2">About</h4>
            <p>
              <img class="no-pixel mx--0" :src="require('@/assets/art/misc/logo-square.png')" />
              <b>Space Station 13 Idle</b> is a game inspired by
              <a href="https://melvoridle.com/">
                <img class="no-pixel mx--0" :src="require('@/assets/art/misc/melvor.svg')" />
                <b>Melvor Idle</b>
              </a>, set in the
              <img class="no-pixel mx--0" :src="require('@/assets/art/misc/clown.png')" />
              <b>Space Station 13</b> universe.
            </p>
            <p>This game is 100% free and open source (AGPL-3.0 License).</p>
            <p>
              If you want to contribute, head on down to the project's
              <a
                href="https://github.com/TBartl/space-station-13-idle/"
              >
                <img class="no-pixel mx--1" :src="require('@/assets/art/misc/github.png')" />
                <b>GitHub Repository</b>
              </a> (no programming experience is required).
            </p>
            <p>
              Also, check out our
              <a href="https://discord.com/invite/HwbK9XQ">
                <img class="no-pixel mx--1" :src="require('@/assets/art/misc/discord.png')" />
                <b>Discord Server</b>
              </a>.
            </p>
          </div>
          <div class="content-block mt-3">
            <h4 class="mb-3">Credits</h4>
            <h5>Developers</h5>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/jobinfo/fabrication.png')" alt />
              <b class="mr-2">Thomas "Tabski" Bartlett:</b>
              <span>Programming</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/combat/enemies/badviro.png')" alt />
              <b class="mr-2">Nathan "Nabski" Bartlett:</b>
              <span>Content and Balance</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/misc/allFaces.gif')" alt />
              <b class="mr-2">GitHub Contributors:</b>
              <span>Various Content and Tweaks</span>
            </div>
            <h5 class="mt-3">Other Great People</h5>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/misc/melvor.svg')" alt />
              <b class="mr-2">Malcs (aka MrFrux):</b>
              <span>Creator of Melvor Idle, this game's original inspiration</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/misc/clown.png')" alt />
              <b class="mr-2">The Entire Space Station 13 Community:</b>
              <span>For the creation of all the open source art used in the project</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/misc/claire.png')" alt />
              <b class="mr-2">Claire "Cemci" Marvinney:</b>
              <span>For the lovingly handpainted background image</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/combat/enemies/bee_anim.gif')" alt />
              <b class="mr-2">bobbahbrown:</b>
              <span>For his help organizing /tg/station data</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/combat/enemies/bald_visitor.png')" alt />
              <b class="mr-2">"Jerry Derpington":</b>
              <span>First Playtester</span>
            </div>
            <div class="my-3">
              <img class="mx--0" :src="require('@/assets/art/misc/clark.png')" alt />
              <b class="mr-2">Gogodapogostick,</b>
              <img class="mx--0" :src="require('@/assets/art/misc/orange.png')" alt />
              <b class="mr-2">Citrusgender,</b>
              <img class="mx--0" :src="require('@/assets/art/misc/frog.png')" alt />
              <b class="mr-2">Armhulen,</b> and
              <img class="mx--0" :src="require('@/assets/art/misc/berry.png')" alt />
              <b class="mr-2">Sunberry:</b>
              <span>Second Round Playtesters</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";

export default {
  extends: ContentAbstract
};
</script>

<style scoped>
img {
  width: 32px;
}
</style>