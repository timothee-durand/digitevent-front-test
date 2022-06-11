<script setup lang="ts">
import { getRandomDateFact, getRandomMathFact } from "@/api";
import { ref } from "vue";
import type { Ref } from "vue";
import type { NumbersApiResponse } from "@/types/api";
import FactCard from "@/components/FactCard.vue";
import LogList from "@/components/LogList.vue";

const mathFact: Ref<NumbersApiResponse> = ref({
  text: "",
  number: 0,
  found: false,
  type: "math" as const
});
const dateFact: Ref<NumbersApiResponse> = ref({
  text: "",
  number: 0,
  found: false,
  type: "date" as const
});

const getNewRandomMathFact = (): void => {
  getRandomMathFact().then((data) => {
    mathFact.value = data;
  });
};

const getNewRandomDateFact = (): void => {
  getRandomDateFact().then((data) => {
    dateFact.value = data;
  });
};

getNewRandomMathFact();
getNewRandomDateFact();


</script>

<template>
  <main>
    <div class="fact-cards">
      <FactCard fact-type="Math" @newFact="getNewRandomMathFact">
        <template v-slot:body><p>{{ mathFact.text }}</p></template>
      </FactCard>
      <FactCard fact-type="Date" @newFact="getNewRandomDateFact()">
        <template v-slot:body><p>{{ dateFact.text }}</p></template>
      </FactCard>
    </div>
    <LogList/>
  </main>


</template>

<style lang="scss">
@import "./assets/base.css";

#app {
  display: flex;
  max-width: 1200px;
  min-height: 100vh;
  padding: 20px;
  justify-content: center;
  align-items: center;

  main {
    display: grid;
    width: 100%;
    grid-template-columns: 45% 1fr;
    gap: 50px;
    min-height: 500px;
    .fact-cards {
      display: grid;
      gap : 50px;
    }
  }

}
</style>
