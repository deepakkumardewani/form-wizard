<template>
  <div>

    <div class="form-container mx-auto">
      <p class="font-bold text-black text-4xl mb-5">Tell us about yourself</p>
      <form class="form mx-auto">
        <div class="my-5 grid grid-rows-1">
          <label
            class="text-left block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Name
          </label>
          <input
            v-model="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          >
        </div>

        <div class="my-5">
          <label
            class="text-left block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Age
          </label>
          <input
            @input="onAgeChange()"
            v-model="age"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="number"
            placeholder="Age"
          >
        </div>

        <div>
          <div class="my-5">
            <label
              class="text-left block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Where do you live
            </label>
            <div class="relative">
              <select
                @change="onCountryChange()"
                v-model="selected"
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >

                <option
                  v-for="option in countries"
                  :key="option.name"
                  :value="option.name"
                  :selected="option.name == 'Hong Kong'"
                >
                  {{ option.name }}
                </option>

              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="package-container py-5 mx-auto">

      <div class="package-grid mx-auto">

        <div
          class="flex my-4"
          v-for="(item, key) in packages"
          :key="key"
        >
          <input
            @change="changePack()"
            v-model="packageSelected"
            :value="item"
            id="default-radio-1"
            type="radio"
            name="default-radio"
            class="w-4 h-5 mr-2 align-middle"
          >
          <label
            class="text-sm"
            :for="item.name"
          >{{item.name}}</label>
        </div>

      </div>

      <div class="my-10 font-bold text-black text-2xl">Your premium is: {{premium}}</div>

      <div class="inline-flex">
        <button
          @click="back()"
          class="bg-white border border-black mr-4 text-black py-2 px-12 rounded"
        >
          Back
        </button>
        <button
          @click="next()"
          class="bg-blue-500 border border-blue-900 text-white py-2 px-12 rounded"
        >
          Next
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      name: "",
      premium: "",
      age: 0,
      selected: "Hong Kong",
      packageSelected: {},
      packages: [
        {
          index: 1,
          name: "Standard",
          percent: "",
        },
        {
          index: 2,
          name: "Safe",
          percent: "50",
        },
        {
          index: 3,
          name: "Super Safe",
          percent: "75",
        },
      ],
      countries: [
        {
          name: "Hong Kong",
          rate: 1,
          code: "HKD",
        },
        {
          name: "USA",
          rate: 2,
          code: "USD",
        },
        {
          name: "Australia",
          rate: 3,
          code: "AUD",
        },
      ],
      pack: "",
      rate: 0,
      code: "",
    };
  },
  created() {
    this.rate = this.countries[0].rate;
    this.code = this.countries[0].code;
    (this.packageSelected = {
      index: 1,
      name: "Standard",
      percent: "",
    }),
    this.adjustPackageType();
  },
  mounted() {
    if (Object.keys(this.$store.state.userInfo).length !== 0) {
      const { name, age, country, packageSelected, premium, rate, code } =
        this.$store.state.userInfo;
      this.name = name;
      this.age = age;
      this.selected = country;
      this.packageSelected = packageSelected;
      this.premium = premium;
      this.rate = rate;
      this.code = code;

      this.adjustPackageType();
    }
  },
  methods: {
    calculatePremium() {
      if (this.packageSelected) {
        let premium, premiumPlus;
        const percentage = parseInt(this.packageSelected.percent);
        let standardPremium = 10 * this.age * this.rate;
        if (!isNaN(percentage)) {
          premiumPlus = (
            (percentage / 100) * standardPremium +
            standardPremium
          ).toFixed(0);
          premium = premiumPlus;
        } else {
          premium = standardPremium;
        }

        this.premium = `${premium} ${this.code}`;
      }
    },
    changePack() {
      // console.log(this.packageSelected);
      this.calculatePremium();
    },
    onAgeChange() {
      if (this.age !== "" && this.rate !== "") {
        this.calculatePremium();
        this.adjustPackageType();
      }
    },
    onCountryChange() {
      const index = this.countries.findIndex((x) => x.name === this.selected);
      const { rate, code } = this.countries[index];

      this.rate = rate;
      this.code = code;

      const selectedPackageIndex = this.packages.findIndex(
        (x) => x.index === this.packageSelected.index
      );

      if (selectedPackageIndex !== -1) {
        this.packageSelected = this.packages[selectedPackageIndex];
      } else {
        this.packageSelected = this.packages[0];
      }
      this.adjustPackageType();
      this.calculatePremium();
    },
    adjustPackageType() {
      if (this.age !== "") {
        for (let index = 0; index < this.packages.length; index++) {
          const element = this.packages[index];

          if (element.index === 2) {
            let standardPremium = 10 * this.age * this.rate;

            const percent = (50 / 100) * standardPremium;
            element.name = `Safe(+${percent}${this.code}, 50%)`;
          }
          if (element.index === 3) {
            let standardPremium = 10 * this.age * this.rate;
            const percent = (75 / 100) * standardPremium;
            element.name = `Super Safe(+${percent}${this.code}, 75%)`;
          }
        }
      }
    },
    back() {
      this.$router.push("/About");
    },
    next() {
      if (this.age > 100) {
        this.$router.push("/age-error");
      } else {
        const data = {
          name: this.name,
          age: this.age,
          country: this.selected,
          premium: this.premium,
          rate: this.rate,
          code: this.code,
          packageSelected: this.packageSelected,
        };
        this.$router.push({ name: "summary", params: data });
      }
    },
  },
};
</script>

<style>
.form {
  width: 20%;
}
.package-grid {
  width: 43%;
}

.package-container {
  background: rgb(244 244 244);
  width: 50%;
}
</style>