<template>
  <!-- Authors Table Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ padding: 0 }"
  >
    <template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <h5 class="font-semibold m-0">All Categories Datasets</h5>
        </a-col>
        <a-col
          :span="24"
          :md="12"
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <a-radio-group v-model="authorsHeaderBtns" size="small">
            <a-radio-button value="all">ALL</a-radio-button>
            <a-radio-button value="online">Enquire Only</a-radio-button>
          </a-radio-group>
        </a-col>
      </a-row>
      <a-row type="flex" align="middle">
        <a-cascader style="width: 20%" size="default" :options="options" @change="onChange" />
      </a-row>
    </template>

    <a-table :columns="columns" :data-source="data" :pagination="false">
      <template slot="author" slot-scope="author">
        <div class="table-avatar-info">
          <a-avatar shape="square" :src="author.avatar" />
          <div class="avatar-info">
            <h6>{{ author.name }}</h6>
            <p>{{ author.email }}</p>
          </div>
        </div>
      </template>

      <template slot="func" slot-scope="func">
        <div class="author-info">
          <h6 class="m-0">{{ func.job }}</h6>
          <p class="m-0 font-regular text-muted">{{ func.department }}</p>
        </div>
      </template>

      <template slot="status" slot-scope="status">
        <a-tag
          class="tag-status"
          :class="status ? 'ant-tag-primary' : 'ant-tag-muted'"
        >
          {{ status ? "Available" : "Enquire Only" }}
        </a-tag>
      </template>

      <template slot="editBtn" slot-scope="row">
        <a-button type="link" :data-id="row.key" class="btn-edit">
          View Detail
        </a-button>
      </template>
    </a-table>
  </a-card>
  <!-- / Authors Table Card -->
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      options: [
        {
          value: "Geographic data",
          label: "Geographic data",
          children: [
            {
              value: "Mobile Location Data",
              label: "Mobile Location Data",
            },
            {
              value: "Wearable Device Data",
              label: "Wearable Device Data",
            },
            {
              value: "GPS Location Data",
              label: "GPS Location Data",
            },
            {
              value: "Vehicle Location Data",
              label: "Vehicle Location Data",
            },
            {
              value: "IoT Location Data",
              label: "IoT Location Data",
            },
            {
              value: "Others",
              label: "Others",
            },
          ],
        },
        {
          value: "Cyber Data",
          label: "Cyber Data",
          children: [
            {
              value: "MAC Address Data",
              label: "MAC Address Data",
            },
            {
              value: "IP Address Data",
              label: "IP Address Data",
            },
            {
              value: "Cache Data",
              label: "Cache Data",
            },
            {
              value: "Browser History Data",
              label: "Browser History Data",
            },
            {
              value: "HTTP Related Data",
              label: "HTTP Related Data",
            },
            {
              value: "Others",
              label: "Others",
            },
            {
              value: "",
              label: "",
            },
          ],
        },
        {
          value: "Health Data",
          label: "Health Data",
          children: [
            {
              value: "Patient Data",
              label: "Patient Data",
            },
            {
              value: "Treatment Records",
              label: "Treatment Records",
            },
            {
              value: "Medical Records",
              label: "Medical Records",
            },
            {
              value: "Epidemic Data",
              label: "Epidemic Data",
            },
          ],
        },
        {
          value: "Transportation Data",
          label: "Transportation Data",
          children: [
            {
              value: "Traffic Data",
              label: "Traffic Data",
            },
            {
              value: "Flight Data",
              label: "Flight Data",
            },
            {
              value: "Route Data",
              label: "Route Data",
            },
            {
              value: "Navigation Data",
              label: "Navigation Data",
            },
            {
              value: "Logistics Data",
              label: "Logistics Data",
            },
            {
              value: "Post Data",
              label: "Post Data",
            },
          ],
        },
        {
          value: "Finance Data",
          label: "Finance Data",
          children: [
            {
              value: "Stock Data",
              label: "Stock Data",
            },
            {
              value: "Fund Data",
              label: "Fund Data",
            },
            {
              value: "Loan Rate Data",
              label: "Loan Rate Data",
            },
            {
              value: "Corporate Financial Data",
              label: "Corporate Financial Data",
            },
            {
              value: "Currency Data",
              label: "Currency Data",
            },
            {
              value: "Reciept Data",
              label: "Reciept Data",
            },
            {
              value: "E-commerce Transaction Data",
              label: "E-commerce Transaction Data",
            },
            {
              value: "Others",
              label: "Others",
            },
          ],
        },
      ],
      // Active button for the "Authors" table's card header radio button group.
      authorsHeaderBtns: "all",
    };
  },
};
</script>