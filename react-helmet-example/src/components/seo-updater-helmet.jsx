
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

const SeoUpdater = (props) => {
    
    const { headerTags: { title, keywords, titleTemplate } } = props
    const [allTags, setAllTags] = useState([])

    useEffect(()=>{
        const titles = getTitles()
        const key_words = getKeyWords()

        const tags = [
            ...titles,
            ...key_words,
        ]
        setAllTags(tags)

    },[title,keywords])

    useEffect(()=>{
        console.log('allTags',allTags)
    },[allTags])

    const getTitles = () => {
        let titles = []
        if (title) {
            titles.push(<title key={'head_title'}>{title}</title>)
            titles.push(<meta key={'og_title'} property='og:title' content={title} />)
            titles.push(<meta key={'twitter_title'} property='twitter:title' content={title} />)
        }

        return titles
    }

    const getKeyWords = () => {
        let collection = []
        if (keywords) {
            collection.push(<meta key={'head_keywords'} property='keywords' content={keywords} />)
        }

        return collection
    }

    return (
        <>
            { allTags.length && 
            <Helmet titleTemplate = {titleTemplate}>
                {allTags}
            </Helmet>
            }
        </>
    )
}

export default SeoUpdater
