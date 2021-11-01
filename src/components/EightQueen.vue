<template>
  <div>
    <div class="title">八皇后问题</div>

    <div class="grid">
      <div class="row" v-for="(row, index) in grids" :key="index">
        <div
          class="cell"
          v-for="(cell, cindex) in row"
          :key="cell.key"
          @click.stop="select(index, cindex)"
        >
          <div class="ok" v-show="cell.ok">Q</div>
          <div class="no" v-show="!cell.ok & cell.no">!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const grids = new Array(8).fill(1).map((_, r) => {
  return new Array(8).fill(1).map((_, c) => {
    return {
      key: `key-${r * 8 + c}`,
      ok: false,
      no: false,
    }
  })
})

export default {
  data() {
    return {
      grids,
    }
  },
  methods: {
    select(rindex, cindex) {
      if (this.validate(rindex, cindex)) {
        this.grids[rindex][cindex].ok = !this.grids[rindex][cindex].ok
      } else {
        this.grids[rindex][cindex].no = true
        console.log('当前位置不能放置皇后')
      }
    },
    validate(rindex, cindex) {
      // 横
      for (let i = 0; i < this.grids[rindex].length; i++) {
        if (this.grids[rindex][i].ok) {
          return false
        }
      }

      // 竖
      for (let i = 0; i < this.grids.length; i++) {
        if (this.grids[i][cindex].ok) {
          return false
        }
      }

      // 撇
      for (let i = 0; i < this.grids[0].length; i++) {
        let y = rindex + cindex - i
        if (y >= 0 && y < this.grids.length && this.grids[y][i].ok) {
          return false
        }
      }

      // 捺
      for (let i = 0; i < this.grids[0].length; i++) {
        let y = rindex - cindex + i
        if (y >= 0 && y < this.grids.length && this.grids[y][i].ok) {
          return false
        }
      }

      return true
    },
  },
}
</script>

<style scoped>
.title {
  font-size: 22px;
  margin: 20px;
}
.grid {
  width: 400px;
  margin: 0 auto;
}
.cell {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  float: left;
  cursor: pointer;
}
.cell:nth-child(2n) {
  background: #86c773;
}
.row:nth-child(2n) .cell:nth-child(2n-1) {
  background: #86c773;
}
.cell:nth-child(2n-1) {
  background: #e0f9c9;
}
.row:nth-child(2n) .cell:nth-child(2n) {
  background: #e0f9c9;
}
.cell .no {
  color: #c93f3f;
  font-weight: 600;
}
.cell .ok {
  font-weight: 600;
}
.row {
  height: 50px;
  width: 400px;
  display: flow-root;
}
</style>
