<script>
  export let profile;


</script>

<div class="flex">
  <div class="p-3">
    <img 
     src={profile.picture}
     alt="profile picture"
     class="w-16 h-16 rounded-full"
    />
  </div>

  <slot />
</div>