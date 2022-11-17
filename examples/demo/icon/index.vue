<template>
  <div>
    <Icon name="favorite" color="red" />
    <Icon name="favorite" color="green" />
    <Icon name="favorite" color="blue" />
    <Icon name="favorite" color="yellow" />
    <br />
    <br />
    <Icon name="edit" />
    <Icon name="download" />
    <Icon name="forward" />
    <Icon name="history" />
    <Icon name="file" />
    <Icon name="link" />
    <Icon name="good" />
    <br />
    <br />
    <Icon name="comment" />
    <Icon name="comment" dot />
    <Icon name="comment" dot badge="1" />
  </div>
</template>
<script lang="ts" setup>
import { Icon } from "kv-ui";
</script>
<style lang="less">
.kv-icon {
  font-size: 36px;
  color: #666;
  margin-right: 20px;
}
</style>
