function Category({ selectCategory, handleBack }) {
  return (
    <div className="container">

      <h1>Choose a Quiz Category</h1>

      <button onClick={() => selectCategory("Java")}>
        Java
      </button>

      <br /><br />

      <button onClick={() => selectCategory("DSA")}>
        DSA
      </button>

      <br /><br />

      <button onClick={() => selectCategory("DBMS")}>
        DBMS
      </button>

      <br /><br />

      <button onClick={() => selectCategory("OS")}>
        Operating System
      </button>

      <br /><br />

      <button onClick={() => selectCategory("CN")}>
        Computer Networks
      </button>

      <br /><br />

      <button onClick={() => selectCategory("Aptitude")}>
        Aptitude
      </button>

      <br /><br />

      <button onClick={handleBack}>
        ← Back
      </button>

    </div>
  );
}

export default Category;