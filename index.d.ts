import { Component, MutableRefObject, RefObject } from 'react'
import { ViewProps } from 'react-native'
import ViewPager from '@react-native-community/viewpager'

export interface TabLayoutItem {
  /**
   * Sets the tab label.
   */
  text?: string
  /**
   * Sets the tab icon.
   */
  icon?: string
  /**
   * default = 'top'
   * Sets the Drawables (if any) to appear to the left of, above, to the right of, and below the text.
   * Allowed values: left, top, right, bottom (if wrong string, top value is set by default).
   */
  iconPosition?: 'left' | 'top' | 'right' | 'bottom'
  /**
   * Set the default text size to the given value, interpreted as "scaled pixel" unit (sp unit).
   */
  textSize?: number
  /**
   * Sets the text color for the normal state.
   */
  textColor?: string
  /**
   * Sets the text color for the selected state.
   */
  selectedTextColor?: string
}

export interface TabLayoutProps extends ViewProps {
  viewPagerRef: MutableRefObject<ViewPager> | RefObject<ViewPager> | null | undefined
  /**
   * Sets the background color for TabLayout container.
   */
  backgroundColor?: string
  /**
   * Sets the tab indicator's color for the currently selected tab.
   */
  indicatorTabColor?: string
  /**
   * Sets the tab indicator's height for the currently selected tab.
   */
  indicatorTabHeight?: number
  /**
   * default = true
   * Set the behavior mode for the Tabs in this layout:
   * true = SCROLLABLE tabs mode.
   * false = FIXED tabs mode.
   *
   */
  scrollable?: boolean
  /**
   * Set the background's TabLayout to a given Drawable
   */
  backgroundImage?: string
  /**
   * default = true
   * Set the gravity to use when laying out the tabs:
   * true = CENTER tabs gravity (only takes effect if you are on FIXED tabs Mode).
   * false = FILL tabs gravity.
   */
  center?: boolean
  items: TabLayoutItem[]
}

export default class TabLayout extends Component<TabLayoutProps> {}
