<template>
  <div class="content-shop">
    <content-header text="Cargo" :icon="require('@/assets/art/sidebar/cargo.png')" color="#febb33" />
    <div class="content-container">
      <job-info
        infoId="shop"
        :icon="require('@/assets/art/jobinfo/shop.png')"
        title="Brick Carr the Quartermaster says..."
        :options="[
					{name: 'Back'},
					{name: 'Seeds?', icon: require('@/assets/art/botany/seed.png'), iconClass:'mx--1'},
					{name: 'New Jobs?', icon: require('@/assets/art/cooking/icon.png'), iconClass:'mx--1'},
					{name: 'Job Upgrades?', icon: require('@/assets/art/mining/upgrade1.png'), iconClass:'mx--1'},
					{name: 'Gambling?', icon: require('@/assets/art/shop/items/hatcrate.png'), iconClass:'mx--1'},
					{name: 'Capes?', icon: require('@/assets/art/combat/items/cloak/capcloak.png'), iconClass:'mx--1'},
					{name: 'Resistance?', icon: require('@/assets/art/jobinfo/cargo_banner.png'), iconClass:'mx--1'}
				]"
      >
        <template slot="Back">
          <span>Welcome to Cargonia!</span>
          <span>Are you here to order something, or to join the resistance?</span>
        </template>
        <template slot="Seeds?">
          <span>
            You won't make it very far as a
            <img
              class="mx--0"
              :src="require('@/assets/art/botany/icon.png')"
            />
            <b>Botanist</b> without any seeds.
          </span>
          <span>Order them in bulk, and I'll give you a discount.</span>
        </template>
        <template slot="New Jobs?">
          <span>
            Unfortunately, recent budgetary restrictions have left us without the proper equipment to support certain
            <img
              class="mx--0"
              :src="require('@/assets/art/cooking/icon.png')"
            />
            <img class="mx--0" :src="require('@/assets/art/xenobio/icon.gif')" />
            <img class="mx--0" :src="require('@/assets/art/shitposting/icon.png')" />
            <b>Jobs</b>.
          </span>
          <span>With your generous contributions, we could get these departments back up and running at full capacity.</span>
        </template>
        <template slot="Job Upgrades?">
          <span>For the right price, I might be able to get you equipped to do your job more efficiently</span>
          <span>I can't just sell this to anyone though. You'll need to demonstrate that you're experienced in that job first.</span>
          <span>
            In fact, for the fancier equipment I'll also need you to prove your
            <img
              class="mx--0"
              :src="require('@/assets/art/validhunting/icon.png')"
            />
            <b>Combat Expertise</b>. I can't have these tools falling into the wrong hands.
          </span>
        </template>

        <template slot="Capes?">
          <span>
            Once you've demonstrated your mastery, I'll be able to order you a
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/cloak/capcloak.png')"
            />
            <b>Cape</b> for a given job.
          </span>
          <span>
            I've heard rumors that these
            <img
              class="mx--2"
              :src="require('@/assets/art/combat/items/cloak/capcloak.png')"
            />
            <b>Capes</b> will work as an extra
            <img
              class="mx--0"
              :src="require('@/assets/art/mining/upgrade1.png')"
            />
            <b>Upgrade</b> for that job, but I don't know if I believe that.
          </span>
        </template>
        <template slot="Gambling?">
          <span>To be honest with you, I don't even know what's in some of these crates.</span>
          <span>Of course, that won't stop me from selling them to you.</span>
          <span>
            At the very least, you should pick up a
            <img
              class="mx--0"
              :src="require('@/assets/art/shop/items/hatcrate.png')"
            />
            <b>Hat Crate</b> at some point; it's the only place you'll find any hats!
          </span>
        </template>
        <template slot="Resistance?">
          <span>You don't know about the resistance?</span>
          <span>Nevermind then. Forget you heard anything.</span>
        </template>
      </job-info>

      <div class="row">
        <div class="col-12">
          <shop-section v-for="(section, index) in sections" :key="index" :section="section" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentAbstract from "@/components/Content/ContentAbstract";
import ShopSection from "@/components/Content/Shop/ShopSection";
import { SECTIONS } from "@/data/shop";
export default {
  extends: ContentAbstract,
  components: { ShopSection },
  computed: {
    sections() {
      return SECTIONS;
    }
  }
};
</script>
