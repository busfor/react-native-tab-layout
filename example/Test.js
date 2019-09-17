import React, { PureComponent } from 'react'
import { View, ViewPagerAndroid, requireNativeComponent, findNodeHandle, UIManager } from 'react-native'

export const getDisplayName = (component) => {
  //a && b: if a = true and b = true then b
  return component && (component.displayName || component.name || null)
}

class TabAndroid extends PureComponent {
  static displayName = 'TabLayoutAndroid.Item'
  static defaultProps = {
    textColor: 'grey',
    selectedTextColor: 'black',
    customView: true,
  }

  render() {
    // Since ViewPagerAndroid needs View children, this component is just responsible for managing props
    // without rendering (TabLayoutAndroid is responsible to get TabAndroid children props and inject them into View components inside the
    // ViewPagerAndroid container, cf. TabLayout->manageChildren())
    return null
  }
}

export class TabLayoutAndroid extends PureComponent {
  static Item = TabAndroid
  static REF_VIEWPAGER = 'refViewPager'
  static REF_TABLAYOUT = 'refTabLayout'
  static defaultProps = {
    style: {
      height: 60,
    },
  }

  tabsSettings = []

  componentDidMount() {
    // this.attachViewPager()
    this.manageChildren()
  }

  renderTabs(children) {
    return children.map((child, index) => {
      if (getDisplayName(child.type) === 'TabLayoutAndroid.Item') {
        return (
          <View key={index} {...child.props}>
            {child.props.children}
          </View>
        )
      }
      //Since proptypes displays only warning with no possible error thrown,
      //we thrown error during render process:
      throw new Error(
        `Invalid child supplied to \`${this.constructor.displayName}\`, expected an element of type TabLayoutAndroid.Item.`
      )
    })
  }

  manageChildren() {
    if (this.props.children) {
      const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]
      const tabsSettings = []
      children.forEach((obj) => {
        tabsSettings.push(this.getChildProps(obj))
      })
      this.tabsSettings = tabsSettings
      console.log(JSON.stringify(tabsSettings))

      return this.renderTabs(children)
    } else {
      console.warn('No Children, use TabAndroid tag to add some children')
      return null
    }
  }

  getChildProps(child) {
    if (child) {
      let tabSettings = new Object()
      for (let propKey in child.props) {
        let propValue = child.props[propKey]
        if (typeof propValue !== 'object') {
          tabSettings[propKey] = propValue
        }
      }

      return tabSettings
    }

    console.warn('No Children, use TabAndroid tag to add some children')
    return null
  }

  attachViewPager() {
    let viewPagerId = findNodeHandle(this.refs[TabLayoutAndroid.REF_VIEWPAGER])

    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this.refs[TabLayoutAndroid.REF_TABLAYOUT]),
      UIManager.getViewManagerConfig('TabLayoutAndroid').Commands['setupWithViewPager'],
      [viewPagerId, this.tabsSettings]
    )
  }

  render() {
    let {
      backgroundColor,
      indicatorTabColor,
      indicatorTabHeight,
      scrollable,
      backgroundImage,
      center,
      initialPage,
      keyboardDismissMode,
      onPageScroll,
      onPageSelected,
      contentHeight,
      ...viewProps
    } = this.props

    return (
      <View style={{ flex: 1 }}>
        {/* <NativeComponent
          ref={TabLayoutAndroid.REF_TABLAYOUT}
          {...viewProps}
          backgroundColor={backgroundColor}
          indicatorTabColor={indicatorTabColor}
          indicatorTabHeight={indicatorTabHeight}
          scrollable={scrollable}
          backgroundImage={backgroundImage}
          center={center}
        /> */}

        {/* <ViewPagerAndroid
          ref={TabLayoutAndroid.REF_VIEWPAGER}
          style={{ width: '100%', height: contentHeight }}
          initialPage={initialPage}
          keyboardDismissMode={keyboardDismissMode}
          onPageScroll={onPageScroll}
          onPageSelected={onPageSelected}
        >
          {this.manageChildren()}
        </ViewPagerAndroid> */}
      </View>
    )
  }
}
