/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function () {
  return {
    logo: require('@/Assets/Images/NOTES.png'),
    dummyProfile: require('@/Assets/Images/dummyProfile.jpg'),
    iconSearch: require('@/Assets/Images/loupe.png'),
    iconArrowLeft: require('@/Assets/Images/left-arrow.png'),
    iconEdit: require('@/Assets/Images/edit.png'),
  }
}
