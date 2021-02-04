<template>
  <table style="width: 100%;">
    <tr>
      <td>
        <div class="pagination">
          <a class="" href="#">◂</a>
          <a
            class="pagination__nav-link"
            :class="{ 'pagination__nav-link_active': isActive }"
            href="#"
            >1</a
          >
          <a class="pagination__nav-link" href="#">2</a>
          <a class="pagination__nav-link" href="#">3</a>
          <a class="pagination__nav-link" href="#">4</a>
          <a class="" href="#">▸</a>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    isActive: Boolean
  }
};
</script>

<style lang="scss" scoped>
// pagination
.pagination {
  font-size: 13px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #15131f;
    font-size: 34px;
  }
}

.pagination__nav-link {
  display: inline-block;
  margin-right: 4px;
  margin-left: 4px;
  padding: 6px 7px;
  width: 26px;
  height: 29px;

  border: 1px solid #15131f;
  box-sizing: border-box;
  box-shadow: 0px 4px 30px 2px rgba(0, 0, 0, 0.01);
  border-radius: 5px;

  font-weight: 600;
  font-size: 14px !important;
  line-height: 17px;
  text-align: center;

  color: #15131f;

  text-decoration: none;
}

.pagination__nav-link_active {
  background: var(--color-main);
  color: #ffffff;
  border: 1px solid var(--color-main);
}
</style>
