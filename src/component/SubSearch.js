function SubSearch({changeSearch, handleTermSubmit} ){
  return(
      <form onSubmit={handleTermSubmit}>
          <div>
              <input id='input-bar' type='text' placeholder='what you wanna know?' onChange={(e)=>changeSearch(e.target.value)}/>
              <button type='submit'>DAREYA</button>
          </div>
      </form>
  )
}
export default SubSearch;