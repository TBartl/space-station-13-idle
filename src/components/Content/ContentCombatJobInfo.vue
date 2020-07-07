<template>
  <job-info
    infoId="REPLACEME"
    :icon="require('@/assets/art/jobinfo/combat.png')"
    title="Fred Best the Head of Security says..."
    :options="[
					{name: 'Back'},
					{name: 'Equipment?', icon: require('@/assets/art/combat/equipment/limb.png'), iconClass:'mx--0'},
					{name: 'Stats?', icon: require('@/assets/art/combat/precision.png'), iconClass:'mx--0'},
					{name: 'Robustness?', icon: require('@/assets/art/jobinfo/robustness.png'), iconClass:'mx--0'},
					{name: 'Health?', icon: require('@/assets/art/combat/health.gif'), iconClass:'mx--0'},
					{name: 'Enemies?', icon: require('@/assets/art/combat/enemies/mouse.png'), iconClass:'mx--2'},
					{name: 'Loot?', icon: require('@/assets/art/misc/coin-padded.png'), iconClass:'mx--2'},
					{name: 'Combat Focus?', icon: require('@/assets/art/jobinfo/combatFocus.png'), iconClass:'mx--1'},
					{name: 'Damage Types?', icon: require('@/assets/art/combat/armor-brute.png'), iconClass:'mx--1'},
					{name: 'Validhunting?', icon: require('@/assets/art/validhunting/icon.png'), iconClass:'mx--1'},
					{name: 'Bosses?', icon: require('@/assets/art/combat/enemies/boss/legion3_anim.gif'), iconClass:'mx--1'},
					{name: 'Legality?', icon: require('@/assets/art/jobinfo/spacelaw.png'), iconClass:'mx--2'}
				]"
  >
    <template slot="Back">
      <span>
        It doesn't matter if you're up against the
        <img
          class="mx--2"
          :src="require('@/assets/art/combat/enemies/mouse.png')"
        />
        <b>Tiniest Mouse</b> or a
        <img
          class="mx--0 legion"
          :src="require('@/assets/art/combat/enemies/boss/legion3_anim.gif')"
        />
        <b>Massive Eldritch Abomination</b>.
      </span>
      <span>As long as you keep hitting your enemy, they'll go sideways eventually.</span>
    </template>
    <template slot="Equipment?">
      <span>Most battles are determined before the fight actually begins.</span>
      <span>
        If you want to be a succesful killer, you'll need to go in well
        <img
          class="mx--0"
          :src="require('@/assets/art/combat/equipment/limb.png')"
        />
        <b>Equipped</b>.
      </span>
      <span>
        Above all else, you should strive to get a
        <img
          class="mx--0"
          :src="require('@/assets/art/combat/equipment/hand.png')"
        />
        <b>Weapon</b> and a
        <img class="mx--0" :src="require('@/assets/art/combat/equipment/chest.png')" />
        <b>Chest Piece</b>.
      </span>
      <span>
        Both of these can be obtained through
        <img
          class="mx--0"
          :src="require('@/assets/art/tinkering/icon.png')"
        />
        <b>Tinkering</b> or
        <img class="mx--0" :src="require('@/assets/art/fabrication/icon.png')" />
        <b>Fabrication</b>, depending on the kind of fighting you want to do.
      </span>
    </template>
    <template slot="Stats?">
      <span>
        There are four primary stats. These can be raised by either your
        <img
          class="mx--0"
          :src="require('@/assets/art/combat/equipment/limb.png')"
        />
        <b>Equipment</b>, or by leveling them with
        <img
          class="mx--0"
          :src="require('@/assets/art/jobinfo/combatFocus.png')"
        />
        <b>Combat Focus</b>.
      </span>
      <li>
        <span>
          <img class="mx--0" :src="require('@/assets/art/combat/precision.png')" />
          <b>Precision</b> increases your chance to hit with any kind of weapon.
        </span>
      </li>
      <li>
        <span>
          <img class="mx--2" :src="require('@/assets/art/combat/skull.png')" />
          <b>Power</b> increases your damage per second.
        </span>

        <span>
          <br />There's separate skills to level for
          <img
            class="mx--0"
            :src="require('@/assets/art/combat/meleePower.png')"
          />
          <b>Melee</b> weapons and
          <img class="mx--0" :src="require('@/assets/art/combat/rangedPower.png')" />
          <b>Guns</b>, but your
          <img class="mx--0" :src="require('@/assets/art/combat/equipment/limb.png')" />
          <b>Equipment</b> contributes to either type.
        </span>
      </li>
      <li>
        <span>
          <img class="mx--2" :src="require('@/assets/art/combat/black_shoes.png')" />
          <b>Evasion</b> increases your chance to evade enemy attacks.
        </span>
      </li>
      <li>
        <span>
          <img class="mx--2" :src="require('@/assets/art/combat/command.png')" />
          <b>Command</b> reduces the chance your companion will flee when you're hit.
        </span>
      </li>
      <span>
        Beyond that, there's some stats that you can only raise with
        <img
          class="mx--0"
          :src="require('@/assets/art/combat/equipment/limb.png')"
        />
        <b>Equipment</b>.
      </span>
      <li>
        <span>
          <img class="mx--0" :src="require('@/assets/art/combat/health.gif')" />
          <b>Max Health</b> will increase your health pool.
        </span>
      </li>
      <li>
        <span>
          <img class="mx--1" :src="require('@/assets/art/combat/armor-brute.png')" />
          <b>Brute Protection</b> and
          <img class="mx--1" :src="require('@/assets/art/combat/armor-burn.png')" />
          <b>Burn Protection</b> reduce damage taken by their respective source.
        </span>
      </li>
    </template>
    <template slot="Robustness?">
      <span>
        <img class="mx--0" :src="require('@/assets/art/jobinfo/robustness.png')" />
        <b>Robustness</b> is a general term for how effective someone or something is in combat, based on their
        <img
          class="mx--0"
          :src="require('@/assets/art/combat/precision.png')"
        />
        <img class="mx--1" :src="require('@/assets/art/combat/skull.png')" />
        <img class="mx--2" :src="require('@/assets/art/combat/black_shoes.png')" />
        <b>Stats</b>.
      </span>
      <span>
        As a general rule, you shouldn't try to fight enemies that are more
        <img
          class="mx--0"
          :src="require('@/assets/art/jobinfo/robustness.png')"
        />
        <b>Robust</b> than you are.
      </span>
    </template>
    <template slot="Health?">
      <span>
        If you take too much damage, you'll go into
        <img
          class="mx--0"
          :src="require('@/assets/art/combat/health-crit.gif')"
        />
        <b>Crit</b>.
      </span>
      <span>
        Our doctors will do their best to revive you, but there's a good chance you'll wake up to find that
        <img
          class="mx--2"
          :src="require('@/assets/art/jobinfo/inventory.png')"
        />
        <b>Someone</b> stole a piece of your
        <img
          class="mx--0"
          :src="require('@/assets/art/combat/equipment/limb.png')"
        />
        <b>Equipment</b>.
      </span>
      <span>
        To keep your
        <img class="mx--0" :src="require('@/assets/art/combat/health.gif')" />
        <b>Health</b>
        up, you'll want to make sure you have plenty of
        <img
          class="mx--2"
          :src="require('@/assets/art/cooking/burger1.png')"
        />
        <b>Food</b> from
        <img class="mx--0" :src="require('@/assets/art/botany/icon.png')" />
        <b>Botany</b> or
        <img class="mx--0" :src="require('@/assets/art/cooking/icon.png')" />
        <b>Cooking</b>.
      </span>
    </template>
    <template slot="Enemies?">
      <span>
        Once you're ready to pick a fight, you can go down to any of the
        <img
          class="mx--0"
          :src="require('@/assets/art/combat/zones/maint.png')"
        />
        <b>Zones</b> listed below and pick your
        <img
          class="mx--2"
          :src="require('@/assets/art/combat/enemies/mouse.png')"
        />
        <b>Target</b>.
      </span>
      <span>
        Be careful not to fight anything too
        <img
          class="mx--0"
          :src="require('@/assets/art/jobinfo/robustness.png')"
        />
        <b>Robust</b>, or you'll quickly find yourself taking a visit to our station's medical center.
      </span>
      <span>
        If you're up to the challenge, I'd recommend you go after your current
        <img
          class="mx--2"
          :src="require('@/assets/art/validhunting/icon.png')"
        />
        <b>Validhunting</b> target.
      </span>
    </template>
    <template slot="Loot?">
      <span>
        Once you've killed an
        <img
          class="mx--2"
          :src="require('@/assets/art/combat/enemies/mouse.png')"
        />
        <b>Enemy</b>, they'll drop some valuable
        <img
          class="mx--2"
          :src="require('@/assets/art/misc/coin-padded.png')"
        />
        <b>Loot</b>.
      </span>
      <span>
        <img class="mx--2" :src="require('@/assets/art/misc/coin-padded.png')" />
        <b>Money</b>, cookable
        <img class="mx--2" :src="require('@/assets/art/cooking/meatAnimal.png')" />
        <b>Meats</b>, and all sorts of other
        <img
          class="mx--2"
          :src="require('@/assets/art/combat/items/face_clown.png')"
        />
        <b>Stuff</b>; you can check an
        <img
          class="mx--2"
          :src="require('@/assets/art/combat/enemies/mouse.png')"
        />
        <b>Enemy's</b> drop table before you jump into a fight.
      </span>
      <span>
        Make sure you collect your
        <img
          class="mx--2"
          :src="require('@/assets/art/misc/coin-padded.png')"
        />
        <b>Loot</b> regulalry, as you won't be able to get it after you
        <img
          class="mx--0"
          :src="require('@/assets/art/combat/run.png')"
        />
        <b>Run Away</b>.
      </span>
    </template>
    <template slot="Combat Focus?">
      <span>
        You can switch your
        <img
          class="mx--0"
          :src="require('@/assets/art/jobinfo/combatFocus.png')"
        />
        <b>Combat Focus</b> between any of the
        <img class="mx--0" :src="require('@/assets/art/combat/precision.png')" />
        <img class="mx--1" :src="require('@/assets/art/combat/skull.png')" />
        <img class="mx--2" :src="require('@/assets/art/combat/black_shoes.png')" />
        <b>Primary Stats</b>.
      </span>
      <span>Doing so will give you a small increase in that stat, as well as allow you to gain experience in that skill.</span>
      <span>
        The amount of experience you gain is based on your damage dealt to the
        <img
          class="mx--2"
          :src="require('@/assets/art/combat/enemies/mouse.png')"
        />
        <b>Enemy</b>.
      </span>
      <span>
        Note that overkilling an
        <img
          class="mx--2"
          :src="require('@/assets/art/combat/enemies/mouse.png')"
        />
        <b>Enemy</b> won't grant you additional experience.
      </span>
    </template>
    <template slot="Damage Types?">
      <span>
        There are two kinds of damage:
        <img
          class="mx--0"
          :src="require('@/assets/art/combat/brute-damage.png')"
        />
        <b>Brute</b> and
        <img class="mx--0" :src="require('@/assets/art/combat/burn-damage.png')" />
        <b>Burn</b>.
      </span>
      <span>
        The type of damage you deal will be based on the type of your
        <img
          class="mx--1"
          :src="require('@/assets/art/combat/items/melee_c4.png')"
        />
        <img class="mx--0" :src="require('@/assets/art/combat/items/gune_tesla.png')" />
        <b>Weapon</b>.
      </span>
      <span>
        If your enemy has a strong
        <img
          class="mx--2"
          :src="require('@/assets/art/combat/armor-brute.png')"
        />
        <img class="mx--2" :src="require('@/assets/art/combat/armor-burn.png')" />
        <b>Protection</b> against that
        <img class="mx--0" :src="require('@/assets/art/combat/brute-damage.png')" />
        <img class="mx--0" :src="require('@/assets/art/combat/burn-damage.png')" />
        <b>Damage Type</b>, your attacks won't be as effective.
      </span>
    </template>
    <template slot="Validhunting?">
      <span>
        At any point, you'll have a task to take out specific
        <img
          class="mx--2"
          :src="require('@/assets/art/validhunting/icon.png')"
        />
        <b>"Validhunting"</b> target.
      </span>
      <span>
        Once you kill enough of these
        <img
          class="mx--2"
          :src="require('@/assets/art/combat/enemies/mouse.png')"
        />
        <b>Enemies</b>, you'll be able to turn in that task to gain a large amount of
        <img
          class="mx--2"
          :src="require('@/assets/art/validhunting/icon.png')"
        />
        <b>Validhunting</b> experience and be assigned a new task.
      </span>
      <span>
        Having a high
        <img class="mx--2" :src="require('@/assets/art/validhunting/icon.png')" />
        <b>Validhunting</b> level will enable you to buy powerful
        <img
          class="mx--1"
          :src="require('@/assets/art/mining/upgrade1.png')"
        />
        <b>Job Upgrades</b> and
        <img class="mx--1" :src="require('@/assets/art/combat/upgrades/autoeat.png')" />
        <b>Combat Upgrades</b> from
        <img class="mx--0" :src="require('@/assets/art/sidebar/cargo.png')" />
        <b>Cargo</b>.
      </span>
      <span>
        However, as your
        <img class="mx--2" :src="require('@/assets/art/validhunting/icon.png')" />
        <b>Validhunting</b> level raises, you'll be assigned more
        <img
          class="mx--0"
          :src="require('@/assets/art/jobinfo/robustness.png')"
        />
        <b>Robust</b>
        <img class="mx--0" :src="require('@/assets/art/combat/enemies/ai_anim.gif')" />
        <b>Enemies</b>.
      </span>
    </template>
    <template slot="Bosses?">
      <span>Looking for a challenge?</span>
      <span>
        Once you've collected enough
        <img
          class="mx--1"
          :src="require('@/assets/art/validhunting/doceasy.png')"
        />
        <b>Bounty Documents</b> from
        <img class="mx--1" :src="require('@/assets/art/combat/enemies/cargo_tech.png')" />
        <b>Enemies</b>, you'll be able to purchase a
        <img
          class="mx--0"
          :src="require('@/assets/art/shop/items/ticketeasy.png')"
        />
        <b>Ticket</b> to fight a random
        <img
          class="mx--0"
          :src="require('@/assets/art/combat/enemies/boss/legion3_anim.gif')"
        />
        <b>Boss</b>.
      </span>
      <span>
        These
        <img class="mx--0" :src="require('@/assets/art/combat/enemies/boss/legion3_anim.gif')" />
        <b>Bosses</b> drop their own special
        <img
          class="mx--2"
          :src="require('@/assets/art/shop/items/telecrystal.png')"
        />
        <b>Currency</b> which can be exchanged for valuable
        <img
          class="mx--0"
          :src="require('@/assets/art/shop/items/syndiedroppod.png')"
        />
        <b>Loot Boxes</b> at
        <img class="mx--0" :src="require('@/assets/art/sidebar/cargo.png')" />
        <b>Cargo</b>.
      </span>
      <span>
        You're not going to be able to take them down easily though; make sure you suit up in your best
        <img
          class="mx--0"
          :src="require('@/assets/art/combat/equipment/limb.png')"
        />
        <b>Equipment</b> and bring some powerful
        <img
          class="mx--0"
          :src="require('@/assets/art/cooking/burger1.png')"
        />
        <b>Food</b>.
      </span>
    </template>
    <template slot="Legality?">
      <span>Most of what you fight isn't even human.</span>
      <span>
        And for the
        <img class="mx--2" :src="require('@/assets/art/combat/enemies/goodclown.png')" />
        <b>Human Enemies</b>?
      </span>
      <span>Well, just write it off as escalation. That's what I do anyway.</span>
    </template>
  </job-info>
</template>

<script>
import JobInfo from "@/components/Content/JobInfo";
export default {
  components: { JobInfo }
};
</script>

<style scoped>
.legion {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  animation: MoveUpDown 3s ease-in-out infinite;
}

@media (max-width: 1900px) {
  .legion {
    margin-left: 0rem;
    margin-right: 0rem;
    animation: MoveUpDownSmaller 3s ease-in-out infinite;
  }
}

@keyframes MoveUpDown {
  0%,
  100% {
    transform: scale(2) translate(0px, 4px);
  }
  50% {
    transform: scale(2) translate(0px, -4px);
  }
}
@keyframes MoveUpDownSmaller {
  0%,
  100% {
    transform: scale(1) translate(0px, 2px);
  }
  50% {
    transform: scale(1) translate(0px, -2px);
  }
}

li {
  margin-left: 4px;
  list-style-type: disc;
  list-style-position: inside;
  text-indent: -1.3em;
  padding-left: 1.3em;
  margin: 6px 0px;
}
li span {
  position: relative;
  left: -2px;
}
</style>