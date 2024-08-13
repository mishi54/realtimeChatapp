import React from 'react'

function GenderCheckbox({onCheckboxChange, selectedGender }) {
  return (
<div className='flex'>
    <div className='form-control'>
        <label className={`label gap-2 cursor-pointer
            ${selectedGender=== "male" ? "selescted" : ""

            }
            `}>
            <span className='label-text'>Male</span>
            <input type="checkbox" className='checkbox
            checkbox-primary'
            checked={selectedGender === "male"}
            onChange={()=> onCheckboxChange("male")}
            
            />
        </label>
    </div>
    <div className='form-control'>
    <label className={`label gap-2 cursor-pointer
            ${selectedGender=== "female" ? "selescted" : ""

            }
            `}>
            <span className='label-text'>Female</span>
            <input type="checkbox" className='checkbox
           checkbox-secondary'
           checked={selectedGender === "female"}
           onChange={()=> onCheckboxChange("female")}/>
        </label>

    </div>

</div>
  )
}

export default GenderCheckbox