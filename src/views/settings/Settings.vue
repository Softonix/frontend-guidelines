<template>
  <div class="h-full">
    <header class="flex justify-between shadow-lg mb-12 px-2 py-5">
      <AppLogo class="flex items-center" />

      <div class="flex items-center gap-4">
        <el-button :type="$elComponentType.primary">
          <router-link :to="{ name: $routeNames.chat }">Home</router-link>
        </el-button>

        <LogOutButton class="py-5" />
      </div>
    </header>

    <div class="max-w-2xl mx-auto px-2">
      <el-form
        ref="profileFormRef"
        hide-required-asterisk :model="profileModel" :rules="profileFormRules"
        class="flex flex-col border rounded-3xl bg-gray-100 backdrop-blur-lg px-10 py-10" label-position="top"
      >
        <div class="flex-col sm:flex-row flex justify-between sm:gap-16 items-center">
          <el-form-item prop="avatar_url">
            <template #label>
              <div class="cursor-pointer relative overflow-hidden rounded-full">
                <el-avatar
                  class="cursor-pointer" :size="120"
                  :src="profileModel.avatar_url"
                />

                <div
                  class="text-xs text-white text-center
                     absolute bottom-0 rounded-full
                     bg-gray-900
                     bg-opacity-60 backdrop-blur-lg w-full py-2"
                >
                  Upload
                </div>
              </div>
            </template>

            <el-input class="hidden" type="file" @change="onFileChange($event)" />
          </el-form-item>

          <el-form-item class="w-full sm:w-auto flex-1" label="Username" prop="username">
            <el-input v-model="profileModel.username" />
          </el-form-item>
        </div>

        <el-form-item label="Fullname" prop="fullname">
          <el-input v-model="profileModel.fullname" />
        </el-form-item>

        <el-form-item label="Email" prop="email">
          <el-input v-model="profileModel.email" />
        </el-form-item>

        <el-form-item label="Bio" prop="bio">
          <el-input
            v-model="profileModel.bio" type="textarea" rows="3" resize="none"
            placeholder="Tell more about yourself"
          />
        </el-form-item>

        <router-link
          class="text-sm text-link-primary"
          :to="{name: $routeNames.forgotPassword}"
        >
          Reset password
        </router-link>

        <div class="flex justify-end gap-5">
          <el-button :type="$elComponentType.primary" @click="submit(profileFormRef)">Save</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const authStore = useAuthStore()
const { loadUser } = authStore
const { currentUser } = storeToRefs(authStore)

const profileFormRef = useElFormRef()
const profileModel = useElFormModel({
  ...currentUser.value?.user_metadata
})

const profileFormRules = useElFormRules({
  email: [useEmailRule(), useRequiredRule()],
  fullname: [useMinLenRule(5), useMaxLenRule(25), useRequiredRule()],
  username: [useMinLenRule(5), useMaxLenRule(25), useRequiredRule()],
  bio: [useMaxLenRule(25)]
})

watch(currentUser, (user) => {
  profileModel.email = user?.email
  profileModel.fullname = user?.user_metadata.fullname
  profileModel.username = user?.user_metadata.username
  profileModel.bio = user?.user_metadata.bio
  profileModel.avatar_url = user?.user_metadata.profile_url
})

onMounted(async () => {
  await loadUser()
})

function onFileChange (e) {
  const file = e.target.files[0]
  console.log('ssw')
  console.log(file)
  // profileModel.avatar_url = URL.createObjectURL(file)
}

function submit (formRef) {
  formRef.validate(async (valid) => {
    console.log(profileModel)
    if (valid) {
      console.log(profileModel)
    }
  })
}
</script>
