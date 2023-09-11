<template>
    <div class="dark:bg-slate-700 h-screen flex justify-center items-center">

      <v-row
        justify="center"
      >
        <v-col>
          <v-card-actions class="justify-center">
          <v-btn
            class="text-decoration-none bg-slate-900"
            color="white"
            href="https://github.com/JuaniPucheta/ds-agcam-tribal/blob/main/src/components/Tables.vue"
            target="_blank"
            text
          >
            <v-icon left>mdi-github</v-icon>
            Código en Github
          </v-btn>
        </v-card-actions>

        <div class="max-w-md m-auto bg-white p-5 rounded-lg">
          <form @submit.prevent="submit">
            <v-text-field
              v-model="name.value.value"
              :counter="10"
              :error-messages="name.errorMessage.value"
              label="Name"
            ></v-text-field>

            <v-text-field
              v-model="phone.value.value"
              :counter="7"
              :error-messages="phone.errorMessage.value"
              label="Phone Number"
            ></v-text-field>

            <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              label="E-mail"
            ></v-text-field>

            <v-select
              v-model="select.value.value"
              :items="items"
              :error-messages="select.errorMessage.value"
              label="Select"
            ></v-select>

            <v-checkbox
              v-model="checkbox.value.value"
              :error-messages="checkbox.errorMessage.value"
              value="1"
              label="Option"
              type="checkbox"
            ></v-checkbox>

            <v-btn
              class="me-4"
              type="submit"
            >
              submit
            </v-btn>

            <v-btn @click="handleReset">
              clear
            </v-btn>
          </form>

        </div>

        </v-col>
      </v-row>

    </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useField, useForm } from 'vee-validate' //yarn add vee-validate

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 2) return true

        return 'Name needs to be at least 2 characters.'
      },
      phone (value) {
        if (value?.length > 9 && /[0-9-]+/.test(value)) return true

        return 'Phone number needs to be at least 9 digits.'
      },
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      },
      select (value) {
        if (value) return true

        return 'Select an item.'
      },
      checkbox (value) {
        if (value === '1') return true

        return 'Must be checked.'
      },
    },
  })
  const name = useField('name')
  const phone = useField('phone')
  const email = useField('email')
  const select = useField('select')
  const checkbox = useField('checkbox')

  const items = ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ])

  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
</script>

<script>
export default {
  name: 'Form1Page',
}
</script>
