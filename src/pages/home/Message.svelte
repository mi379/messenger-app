<script>
  import getUser from '../../functions/getUser'

  export let data, userId;
 
  var userInfo = getUser(
    data,userId
  )

</script>

<div class="flex border-2">
  <div class="p-4">
    <img
      src={userInfo.profile.picture}
      alt="sender message picture"
      class="w-12 h-12 rounded-full"
    />
  </div>
  <div class="flex-1 flex items-center">
    <p>{data.content.value}</p>
  </div>
</div>