function List() {
    // const languages = ["c", "c++", "python", "java", "javascript"];
    // return(
    //     <div>
    //         {languages.map((language) => {
    //             return <div>I love {language}</div>
    //         })}
    //     </div>
    // )
    const languageDict = [
        {id : 1, language : "js"},
        {id : 2, language : "c++"},
        {id : 3, language : "java"},
        {id : 4, language : "python"},
        {id : 5, language : "c"}
    ]
    return(
        <div>
            {languageDict.map((language) => {
                return <div key={language.id}>
                    {language.id}. {language.language}
                </div>
            })}
        </div>
    )
}

export default List;
