<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" />
</template>

<script>
import { FileUpload, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          docId: 'M1T2A1N548572512085860351',
          path: 'edm/one/',
          docVersion: 'V1',
          name: 'test1.png',
          docSize: 100 * 1024,
          size: 100 * 1024,
          serverName: 'ShenZhen'
        },
        {
          docId: 'M1T2A1N548572512085860352',
          path: 'edm/one/',
          docVersion: 'V1',
          name: 'test2.doc',
          docSize: 17252 * 1024,
          size: 17252 * 1024,
          serverName: 'ShenZhen'
        },
        {
          docId: 'M1T2A1N548572512085860353',
          path: 'edm/one/',
          docVersion: 'V1',
          name: 'test3.png',
          docSize: 200 * 1024,
          size: 200 * 1024,
          serverName: 'ShenZhen',
          status: 'uploading',
          percentage: 30
        },
        {
          docId: 'M1T2A1N548572512085860353',
          path: 'edm/one/',
          docVersion: 'V1',
          name: 'test4.doc',
          docSize: 17252 * 1024,
          size: 17252 * 1024,
          serverName: 'ShenZhen',
          status: 'fail',
          percentage: 30
        },
        {
          docId: 'M1T2A1N548572512085860353',
          path: 'edm/one/',
          docVersion: 'V1',
          name: 'test5超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长.doc',
          docSize: 17252 * 1024,
          size: 17252 * 1024,
          serverName: 'ShenZhen'
        }
      ]
    }
  }
}
</script>
