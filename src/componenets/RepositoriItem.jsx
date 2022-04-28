import { FlatList, View, StyleSheet,TouchableHighlight } from "react-native-web";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    }
})
const repositories = [
    {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1589,
        stargazersCount: 21553,
        ratingAverage: 88,
        reviewCount: 4,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    },
    {
        id: 'rails.rails',
        fullName: 'rails/rails',
        description: 'Ruby on Rails',
        language: 'Ruby',
        forksCount: 18349,
        stargazersCount: 45377,
        ratingAverage: 100,
        reviewCount: 2,
        ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
    },
    {
        id: 'django.django',
        fullName: 'django/django',
        description: 'The Web framework for perfectionists with deadlines.',
        language: 'Python',
        forksCount: 21015,
        stargazersCount: 48496,
        ratingAverage: 73,
        reviewCount: 5,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
    },
    {
        id: 'reduxjs.redux',
        fullName: 'reduxjs/redux',
        description: 'Predictable state container for JavaScript apps',
        language: 'TypeScript',
        forksCount: 13902,
        stargazersCount: 52869,
        ratingAverage: 0,
        reviewCount: 0,
        ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
    },
];

const ItemSeperator = () => <View styles={styles.seperator} />

const RepositoryList = () => {
    return (
        <View>

            <FlatList
                data={repositories}
                ItemSeperatorComponent={ItemSeperator} 
       
                // ItemSeparatorComponent={
                //     Platform.OS !== 'android' &&
                //     (({ highlighted }) => (
                //         <View
                //             style={[
                //                 styles.separator,
                //                 highlighted && { marginLeft: 0 }
                //             ]}
                //         />
                //     ))
                // }
                // renderItem={({ item, index, separators }) => (
                //     // <TouchableHighlight
                //     //     key={item.key}
                //     //     onPress={() => this._onPress(item)}
                //     //     onShowUnderlay={separators.highlight}
                //     //     onHideUnderlay={separators.unhighlight}>
                //     //     <View style={{ backgroundColor: 'white' }}>
                //     //         <Text>{item.title}</Text>
                //     //     </View>
                //     // </TouchableHighlight>
                // )}
            />
        </View>

    )
}

export default RepositoryList