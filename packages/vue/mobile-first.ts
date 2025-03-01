import ActionSheet from '@opentiny/vue-action-sheet'
import Alert from '@opentiny/vue-alert'
import AsyncFlowchart from '@opentiny/vue-async-flowchart'
import Badge from '@opentiny/vue-badge'
import Button from '@opentiny/vue-button'
import CalendarBar from '@opentiny/vue-calendar-bar'
import CalendarView from '@opentiny/vue-calendar-view'
import Card from '@opentiny/vue-card'
import CardGroup from '@opentiny/vue-card-group'
import Carousel from '@opentiny/vue-carousel'
import CarouselItem from '@opentiny/vue-carousel-item'
import CascaderMobile from '@opentiny/vue-cascader-mobile'
import CascaderSelect from '@opentiny/vue-cascader-select'
import Cell from '@opentiny/vue-cell'
import Checkbox from '@opentiny/vue-checkbox'
import CheckboxGroup from '@opentiny/vue-checkbox-group'
import Collapse from '@opentiny/vue-collapse'
import CollapseItem from '@opentiny/vue-collapse-item'
import ColumnListGroup from '@opentiny/vue-column-list-group'
import ColumnListItem from '@opentiny/vue-column-list-item'
import Drawer from '@opentiny/vue-drawer'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownItem from '@opentiny/vue-dropdown-item'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import Exception from '@opentiny/vue-exception'
import FileUpload from '@opentiny/vue-file-upload'
import Filter from '@opentiny/vue-filter'
import FilterBar from '@opentiny/vue-filter-bar'
import FloatingButton from '@opentiny/vue-floating-button'
import Flowchart from '@opentiny/vue-flowchart'
import Form from '@opentiny/vue-form'
import FormItem from '@opentiny/vue-form-item'
import Image from '@opentiny/vue-image'
import ImageViewer from '@opentiny/vue-image-viewer'
import Input from '@opentiny/vue-input'
import Loading from '@opentiny/vue-loading'
import Modal from '@opentiny/vue-modal'
import Numeric from '@opentiny/vue-numeric'
import Pager from '@opentiny/vue-pager'
import PagerItem from '@opentiny/vue-pager-item'
import Popconfirm from '@opentiny/vue-popconfirm'
import Popover from '@opentiny/vue-popover'
import Progress from '@opentiny/vue-progress'
import Radio from '@opentiny/vue-radio'
import RadioButton from '@opentiny/vue-radio-button'
import RadioGroup from '@opentiny/vue-radio-group'
import Rate from '@opentiny/vue-rate'
import Record from '@opentiny/vue-record'
import Search from '@opentiny/vue-search'
import SelectMobile from '@opentiny/vue-select-mobile'
import SelectView from '@opentiny/vue-select-view'
import SelectedBox from '@opentiny/vue-selected-box'
import Slider from '@opentiny/vue-slider'
import SliderButton from '@opentiny/vue-slider-button'
import SliderButtonGroup from '@opentiny/vue-slider-button-group'
import StandardListItem from '@opentiny/vue-standard-list-item'
import Steps from '@opentiny/vue-steps'
import Switch from '@opentiny/vue-switch'
import TabItem from '@opentiny/vue-tab-item'
import Tabbar from '@opentiny/vue-tabbar'
import TabbarItem from '@opentiny/vue-tabbar-item'
import Tabs from '@opentiny/vue-tabs'
import Tag from '@opentiny/vue-tag'
import TagGroup from '@opentiny/vue-tag-group'
import TimeLine from '@opentiny/vue-time-line'
import TimePickerMobile from '@opentiny/vue-time-picker-mobile'
import Tooltip from '@opentiny/vue-tooltip'
import Upload from '@opentiny/vue-upload'
import UploadDragger from '@opentiny/vue-upload-dragger'
import UploadList from '@opentiny/vue-upload-list'
import UserHead from '@opentiny/vue-user-head'
import UserHeadGroup from '@opentiny/vue-user-head-group'
import { $prefix } from '@opentiny/vue-common'

const components = [
  ActionSheet,
  Alert,
  AsyncFlowchart,
  Badge,
  Button,
  CalendarBar,
  CalendarView,
  Card,
  CardGroup,
  Carousel,
  CarouselItem,
  CascaderMobile,
  CascaderSelect,
  Cell,
  Checkbox,
  CheckboxGroup,
  Collapse,
  CollapseItem,
  ColumnListGroup,
  ColumnListItem,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Exception,
  FileUpload,
  Filter,
  FilterBar,
  FloatingButton,
  Flowchart,
  Form,
  FormItem,
  Image,
  ImageViewer,
  Input,
  Loading,
  Modal,
  Numeric,
  Pager,
  PagerItem,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Record,
  Search,
  SelectMobile,
  SelectView,
  SelectedBox,
  Slider,
  SliderButton,
  SliderButtonGroup,
  StandardListItem,
  Steps,
  Switch,
  TabItem,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  TagGroup,
  TimeLine,
  TimePickerMobile,
  Tooltip,
  Upload,
  UploadDragger,
  UploadList,
  UserHead,
  UserHeadGroup
]

export const install = (app, opts = {}) => {
  const regex = new RegExp('^' + $prefix)

  const appProperties = app.config?.globalProperties || app.prototype
  appProperties.tiny_mode = { value: 'mobile-first' }

  components.forEach((component) => {
    const name = component.name
    const alias = opts.alias || opts.prefix

    if (typeof component.install !== 'function') return

    if (name && alias) {
      app.component(name.replace(regex, alias), component)
    } else {
      component.install(app)
    }
  })
}

export const version = '3.11.0'

export {
  ActionSheet,
  Alert,
  AsyncFlowchart,
  Badge,
  Button,
  CalendarBar,
  CalendarView,
  Card,
  CardGroup,
  Carousel,
  CarouselItem,
  CascaderMobile,
  CascaderSelect,
  Cell,
  Checkbox,
  CheckboxGroup,
  Collapse,
  CollapseItem,
  ColumnListGroup,
  ColumnListItem,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Exception,
  FileUpload,
  Filter,
  FilterBar,
  FloatingButton,
  Flowchart,
  Form,
  FormItem,
  Image,
  ImageViewer,
  Input,
  Loading,
  Modal,
  Numeric,
  Pager,
  PagerItem,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Record,
  Search,
  SelectMobile,
  SelectView,
  SelectedBox,
  Slider,
  SliderButton,
  SliderButtonGroup,
  StandardListItem,
  Steps,
  Switch,
  TabItem,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  TagGroup,
  TimeLine,
  TimePickerMobile,
  Tooltip,
  Upload,
  UploadDragger,
  UploadList,
  UserHead,
  UserHeadGroup
}

export default {
  ActionSheet,
  Alert,
  AsyncFlowchart,
  Badge,
  Button,
  CalendarBar,
  CalendarView,
  Card,
  CardGroup,
  Carousel,
  CarouselItem,
  CascaderMobile,
  CascaderSelect,
  Cell,
  Checkbox,
  CheckboxGroup,
  Collapse,
  CollapseItem,
  ColumnListGroup,
  ColumnListItem,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Exception,
  FileUpload,
  Filter,
  FilterBar,
  FloatingButton,
  Flowchart,
  Form,
  FormItem,
  Image,
  ImageViewer,
  Input,
  Loading,
  Modal,
  Numeric,
  Pager,
  PagerItem,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Record,
  Search,
  SelectMobile,
  SelectView,
  SelectedBox,
  Slider,
  SliderButton,
  SliderButtonGroup,
  StandardListItem,
  Steps,
  Switch,
  TabItem,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  TagGroup,
  TimeLine,
  TimePickerMobile,
  Tooltip,
  Upload,
  UploadDragger,
  UploadList,
  UserHead,
  UserHeadGroup,
  install
} as any
