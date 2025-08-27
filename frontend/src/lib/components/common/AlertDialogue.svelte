<script lang="ts">
  import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
  let { triggerText, title, description, action } = $props();
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger>{triggerText}</AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>{title}</AlertDialog.Title>
      <AlertDialog.Description>
        This action cannot be undone.
        {description}
      </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action onclick={() => action()}>Continue</AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>
