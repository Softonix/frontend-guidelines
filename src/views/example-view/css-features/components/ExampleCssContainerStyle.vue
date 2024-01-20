<template>
  <ul class="card-list p-3">
    <li
      v-for="(item, index) in days"
      :key="index"
      class="card-container"
      :style="item.style"
    >
      <div class="weather-card">
        <div class="day">{{ item.day }}</div>
        <div class="date">{{ item.month }} <span>{{ item.date }}</span></div>
        <div class="temps">
          <div class="high">High: <span>{{ item.high }}</span></div>/
          <div class="low">Low: <span>{{ item.low }}</span></div>
        </div>
        <div class="features">
          {{ item.desc }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const days = [
  {
    day: 'Thursday',
    month: 'February',
    date: '8',
    high: '52',
    low: '43',
    desc: 'Afternoon showers',
    style: '--rain: true'
  },
  {
    day: 'Friday',
    month: 'February',
    date: '9',
    high: '45',
    low: '39',
    desc: 'Mostly cloudy',
    style: '--cloudy: true'
  },
  {
    day: 'Sunday',
    month: 'February',
    date: '10',
    high: '55',
    low: '47',
    desc: 'Partly cloudy',
    style: '--cloudy: true; --sunny: true'
  },
  {
    day: 'Saturday',
    month: 'February',
    date: '11',
    high: '55',
    low: '47',
    desc: 'Clear skies, sun',
    style: '--sunny: true'
  }
]
</script>

<style lang="scss" scoped>
.card-container {
  container-name: weather;
}

@container style(--rain: true) {
  .weather-card {
    background: linear-gradient(140deg, #76c4f2, #2ecdbb);
  }

  .weather-card:after {
    // eslint-disable-next-line max-len
    content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDk5LjIsMTE5LjhjMCwwLTI4Ny41LDI5Ny43LTI4Ny4xLDQ2MS43YzAuNCwxNjAsMTM0LDI4NS44LDI4Ny4xLDI4NmMxNTYuMSwwLjIsMjg0LTEyMC4xLDI4NC4zLTI4MS4zCglDNzgzLjgsNDIyLjEsNDk5LjIsMTE5LjgsNDk5LjIsMTE5Ljh6Ii8+Cjwvc3ZnPgo=');
    background: #3db2c3;
  }
}

@container style(--cloudy: true) {
  .weather-card {
    background: linear-gradient(-60deg, #909da4, #adc0be);
  }

  .weather-card:after {
    // eslint-disable-next-line max-len
    content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI1NDQuNiIgY3k9IjUxNS40IiByPSIzMjkuMSIvPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI4MjAuOSIgY3k9IjY0My45IiByPSIxNDguOCIvPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI4MjEuMiIgY3k9IjQyOS44IiByPSIxNDguOCIvPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyNTEuOCIgY3k9IjUzNy41IiByPSIyMzUuNiIvPgo8L3N2Zz4K');
    background: #637685;
  }
}

@container style(--sunny: true) {
  .weather-card {
    background: linear-gradient(-30deg, #ffff75, #ffbc41);
  }

  .weather-card:after {
    // eslint-disable-next-line max-len
    content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI1MDAiIGN5PSI1MDAiIHI9IjMwOC43Ii8+CjxnPgoJPHJlY3QgeD0iNDc1IiB5PSIxNyIgY2xhc3M9InN0MCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEzOS40Ii8+CjwvZz4KPGc+Cgk8cmVjdCB4PSI0NzUiIHk9Ijg0My42IiBjbGFzcz0ic3QwIiB3aWR0aD0iNTAiIGhlaWdodD0iMTM5LjQiLz4KPC9nPgo8Zz4KCTxyZWN0IHg9Ijg0My42IiB5PSI0NzUiIGNsYXNzPSJzdDAiIHdpZHRoPSIxMzkuNCIgaGVpZ2h0PSI1MCIvPgo8L2c+CjxnPgoJPHJlY3QgeD0iMTciIHk9IjQ3NSIgY2xhc3M9InN0MCIgd2lkdGg9IjEzOS40IiBoZWlnaHQ9IjUwIi8+CjwvZz4KPGc+CgkKCQk8cmVjdCB4PSI3MjIuNSIgeT0iMTgyLjgiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgODUuMTM2MiA2MjEuMDUwOSkiIGNsYXNzPSJzdDAiIHdpZHRoPSIxMzkuNCIgaGVpZ2h0PSI1MCIvPgo8L2c+CjxnPgoJCgkJPHJlY3QgeD0iMTM4IiB5PSI3NjcuMiIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtNDk5LjM0OTcgMzc4Ljk0ODYpIiBjbGFzcz0ic3QwIiB3aWR0aD0iMTM5LjQiIGhlaWdodD0iNTAiLz4KPC9nPgo8Zz4KCQoJCTxyZWN0IHg9Ijc2Ny4yIiB5PSI3MjIuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtMzI4LjE1NzkgNzkyLjI0MjcpIiBjbGFzcz0ic3QwIiB3aWR0aD0iNTAiIGhlaWdodD0iMTM5LjQiLz4KPC9nPgo8Zz4KCQoJCTxyZWN0IHg9IjE4Mi44IiB5PSIxMzgiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTg2LjA1NTYgMjA3Ljc1NjgpIiBjbGFzcz0ic3QwIiB3aWR0aD0iNTAiIGhlaWdodD0iMTM5LjQiLz4KPC9nPgo8L3N2Zz4K');
    background: #ffce17;
  }
}

@container style(--sunny: true) and style(--cloudy: true) {
  .weather-card {
    background: linear-gradient(24deg, #f0aec9, #a590ce);
  }

  .weather-card:after {
    // eslint-disable-next-line max-len
    content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI1NTEuNSIgY3k9IjYxMC4yIiByPSIzMjkuMSIvPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI4MjcuOCIgY3k9IjczOC43IiByPSIxNDguOCIvPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI4MjguMSIgY3k9IjUyNC42IiByPSIxNDguOCIvPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyNTguNyIgY3k9IjYzMi4zIiByPSIyMzUuNiIvPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI0MzEuMyIgY3k9IjM2MS40IiByPSIxOTIuMSIvPgo8Zz4KCTxyZWN0IHg9IjQxNS44IiB5PSI2MC43IiBjbGFzcz0ic3QwIiB3aWR0aD0iMzEuMSIgaGVpZ2h0PSI4Ni44Ii8+CjwvZz4KPGc+Cgk8cmVjdCB4PSI0MTUuOCIgeT0iNTc1LjIiIGNsYXNzPSJzdDAiIHdpZHRoPSIzMS4xIiBoZWlnaHQ9Ijg2LjgiLz4KPC9nPgo8Zz4KCTxyZWN0IHg9IjY0NS4yIiB5PSIzNDUuOCIgY2xhc3M9InN0MCIgd2lkdGg9Ijg2LjgiIGhlaWdodD0iMzEuMSIvPgo8L2c+CjxnPgoJPHJlY3QgeD0iMTMwLjciIHk9IjM0NS44IiBjbGFzcz0ic3QwIiB3aWR0aD0iODYuOCIgaGVpZ2h0PSIzMS4xIi8+CjwvZz4KPGc+CgkKCQk8cmVjdCB4PSI1NjkuOCIgeT0iMTY0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIDUyLjY3MDggNDg2LjE5MDYpIiBjbGFzcz0ic3QwIiB3aWR0aD0iODYuOCIgaGVpZ2h0PSIzMS4xIi8+CjwvZz4KPGc+CgkKCQk8cmVjdCB4PSIyMDYiIHk9IjUyNy43IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC0zMTEuMTE0MyAzMzUuNDU4NikiIGNsYXNzPSJzdDAiIHdpZHRoPSI4Ni44IiBoZWlnaHQ9IjMxLjEiLz4KPC9nPgo8Zz4KCQoJCTxyZWN0IHg9IjU5Ny42IiB5PSI0OTkuOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtMjA0LjU1NjcgNTkyLjcwNDIpIiBjbGFzcz0ic3QwIiB3aWR0aD0iMzEuMSIgaGVpZ2h0PSI4Ni44Ii8+CjwvZz4KPGc+CgkKCQk8cmVjdCB4PSIyMzMuOSIgeT0iMTM2IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC01My44MjQ3IDIyOC45MTkxKSIgY2xhc3M9InN0MCIgd2lkdGg9IjMxLjEiIGhlaWdodD0iODYuOCIvPgo8L2c+Cjwvc3ZnPgo=');
    background: #ba6ed9;
  }
}

@layer styles {
  .date {
    font-size: 2rem;
  }

  .temps {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .card-container {
    display: grid;
  }

  .weather-card {
    display: grid;
    padding: 1.5rem;
    border-radius: 0.5rem;
    line-height: 1.2;
    position: relative;
    @apply shadow-xl #{!important}
  }

  .weather-card:after {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background: black;
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    padding: 0.5rem;
  }

  .temps span,
  .date span {
    font-weight: 700;
  }
}

@layer base-style {
  body {
    font-family: system-ui;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  .card-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    max-width: 800px;
    margin: 0 auto;
    gap: 1rem;
    padding: 1rem;
  }
}
</style>
