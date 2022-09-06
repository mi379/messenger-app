<script>
  export let data
</script>

<div class="flex border-2">
  <div class="p-4">
    <img
      src={data.profile.picture}
      class="w-12 h-12 rounded-full"
    />
  </div>
  <div class="flex-1 flex items-center">
    {data.profile.firstName}
  </div>
</div>
