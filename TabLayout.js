import React, { memo, useEffect, useRef } from 'react'
import { requireNativeComponent, findNodeHandle, UIManager } from 'react-native'

const TabLayoutAndroid = requireNativeComponent('TabLayoutAndroid')

export default memo(({ viewPagerRef, items, ...props }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (viewPagerRef) {
      const viewPagerId = findNodeHandle(viewPagerRef)
      if (viewPagerId) {
        UIManager.dispatchViewManagerCommand(
          findNodeHandle(ref.current),
          UIManager.getViewManagerConfig('TabLayoutAndroid').Commands['setupWithViewPager'],
          [viewPagerId, items]
        )
      }
    }
  }, [])

  return <TabLayoutAndroid ref={ref} {...props} />
})
