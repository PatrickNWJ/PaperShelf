import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { GENRES, LITERATURE, THEMES } from '../utils/booklist'

function Header(props) {
   const {index, title, description} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate 400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}




export default function Generator() {
    const [showModal, setShowModal] = useState(false) 
    const [book, setBook] = useState('all_novels')
    const [genre, setGenre] = useState([])
    const [themes, setThemes] = useState('human_nature')
   // let showModal = false

    function toggleModal() {
        setShowModal(!showModal)
    }
    
    return ( 
        <SectionWrapper header={"generate your novel"} title= {['It\'s', 'Paper', 'time']}>
            <Header index={'01'} title={'Pick your Story'}
            description={"Select the book you desire"} />
            <div className='grid grid-cols-3 gap-4'>

        
            {Object.keys(LITERATURE).map((type, typeIndex) => {
                return (
                    <button onClick={() => {
                        setBook(type)
                    }} className={'bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg' + (type === book ? ' border-blue-600' : ' border-blue-400')} key={typeIndex}>
                        <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                    </button>
                )
            }
        
        )}
        </div>
        <Header index={'02'} title={'Genre Bending'}
            description={"Genres that are spellbounding"} />
            <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
        <p>Select Genre</p>
        <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2
        fa-caret-down"></i>
           </button>
           {showModal && (
            <div className='flex '>
                {GENRES}
            </div>
           )}
        </div>
    
            <Header index={'03'} title={'Thematic Elements'}
            description={"Themes for your Journey"} />
            <div className='grid grid-cols-3  gap-4'>

        
            {Object.keys(THEMES).map((theme, themeIndex) => {
                return (
                    <button onClick={() => {
                        setThemes(theme)
                    }} className={'bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg' + (theme === themes ? ' border-blue-600' : ' border-blue-400')} key={themeIndex}>
                        <p className='capitalize'>{theme.replaceAll('_', " ")}</p>
                    </button>
                )
            }
        
        )}
        </div>
        </SectionWrapper>

    )
}