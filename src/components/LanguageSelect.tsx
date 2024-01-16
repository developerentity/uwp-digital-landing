'use client'

import React, { useEffect, useRef, useState } from 'react';


const LANGUAGES = [
    {
        id: '1',
        name: 'Ukraine',
        shortName: 'UA',
        flagUrl: './flags/UA.svg'
    },
    {
        id: '2',
        name: 'English',
        shortName: 'GB',
        flagUrl: './flags/GB.svg'
    },
    {
        id: '3',
        name: 'Espanola',
        shortName: 'ES',
        flagUrl: './flags/ES.svg'
    },
    {
        id: '4',
        name: 'Svenska',
        shortName: 'SE',
        flagUrl: './flags/SE.svg'
    },
    {
        id: '5',
        name: 'Dansk',
        shortName: 'DK',
        flagUrl: './flags/DK.svg'
    },
    {
        id: '6',
        name: 'Deutsch',
        shortName: 'DE',
        flagUrl: './flags/DE.svg'
    },
    {
        id: '7',
        name: 'NL',
        shortName: 'Nederland',
        flagUrl: './flags/NL.svg'
    },
    {
        id: '8',
        name: 'PL',
        shortName: 'Poland',
        flagUrl: './flags/PL.svg'
    },
    {
        id: '9',
        name: 'RU',
        shortName: 'Russian',
        flagUrl: './flags/RU.svg'
    },
]

export default function LanguageSelect({ direction }: ILanguageSelectProps) {

    const lang = LANGUAGES[1]

    const [isSelectorOpen, setIsSelectorOpen] = useState(false);
    const [expandedHeight, setExpandedHeight] = useState(0)
    const [selectedLanguage, setSelectedLanguage] = useState(lang)
    const borderWidth = 2;

    const heightToExpand = isSelectorOpen ? `${expandedHeight}px` : ''

    const listRef = useRef<HTMLDivElement>(null)
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const listHeight = listRef.current?.clientHeight;
        const initialHeight = rootRef.current?.clientHeight;
        if (listHeight && initialHeight) {
            setExpandedHeight(listHeight + initialHeight + borderWidth * 2)
        }
    }, [])

    const handleOpen = () => setIsSelectorOpen(!isSelectorOpen)
    const handleLanguageChange = (lang: ILanguage) => {
        setSelectedLanguage(lang)
        setIsSelectorOpen(false)
    }

    return (
        <div className='language-button-container'>
            <div
                ref={rootRef}
                style={{ height: `${heightToExpand}` }}
                className={`${direction} language-button-content  border-${borderWidth}`}>
                <button onClick={handleOpen}>
                    <IconContainer flagUrl={selectedLanguage.flagUrl} />
                </button>
                <div ref={listRef}>
                    <OptionsList
                        arrayLanguages={LANGUAGES}
                        handleChose={handleLanguageChange} />
                </div>
            </div>
        </div>
    );
}

function IconContainer({ flagUrl }: IIconContainerProps) {
    return (
        <div className='p-[2px]'>
            <img src={flagUrl} alt="flag" className="border rounded-full hover:border-gray-500 pointer-events-none h-[30px] w-[30px]" />
        </div>
    )
}

function OptionsList({ arrayLanguages, handleChose }: IOptionsListProps) {
    return (
        <ul>
            {arrayLanguages.map(lang => (
                <li key={lang.id} onClick={() => handleChose(lang)}>
                    <IconContainer flagUrl={lang.flagUrl} />
                </li>))}
        </ul>
    )
}

interface ILanguage {
    id: string
    name: string
    shortName: string
    flagUrl: string
}

interface ILanguageSelectProps {
    direction: 'to-up' | 'to-down'
}

interface IIconContainerProps {
    flagUrl: string
}

interface IOptionsListProps {
    arrayLanguages: Array<ILanguage>
    handleChose: (lang: ILanguage) => void
}