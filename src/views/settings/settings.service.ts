class SettingsService {
  async uploadAvatar (avatar: File) {
    const { data, error } = await useSupabase()
      .storage
      .from('images')
      .upload(`avatars/${avatar.name}`, avatar, {
        cacheControl: '3600',
        upsert: true
      })

    if (error) {
      throw error
    }

    return data
  }

  async updateProfile (profile: IProfile) {
    const {
      email,
      avatar_url: avatarUrl,
      fullname, username,
      bio, tagname
    } = profile

    const { data, error } = await useSupabase().auth.updateUser({
      email,
      data: { fullname, username, bio, tagname, avatar_url: avatarUrl }
    })

    if (error) {
      throw error
    }

    return data
  }

  async getAvatarUrl (path: string) {
    const { data } = useSupabase().storage.from('images').getPublicUrl(path)

    return data
  }

  async deleteAvatar (avatarPath: string) {
    const { data, error } = await useSupabase()
      .storage
      .from('images')
      .remove([avatarPath])

    if (error) {
      throw error
    }

    return data
  }
}

export const settingsService = new SettingsService()
