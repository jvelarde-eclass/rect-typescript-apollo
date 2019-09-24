import React from 'react'


type props = {
    name? : string 
    label?: string 
    placeholder?: string 
    blockInfo?: string 
    value?: string 
    error?: string 
    options?: []
    inputWidth?: number
    labelWidth?: number
    required?: boolean
    handleOnChange(e: React.FormEvent<HTMLSelectElement>) : void
}

const Select = ( props: props ) => {
    props.name = ''
    props.label = ''
    props.placeholder = ''
    props.blockInfo = ''
    props.value = ''
    props.error = ''
    props.options = []
    props.inputWidth = 8
    props.labelWidth = 4
    props.required = false
      


    let array : Array<number>  = []
    for (var i in props.options) {
        if (props.options.hasOwnProperty(i) && !isNaN(+i)) {
            array[+i] = props.options[i];
        }
    }
    return (
        <>
            className={`${props.error ? ('has-error error') : ('')} form-group`}
                <label className={`col - xs - 11 col-lg-${props.labelWidth} control-label`}>
                    {props.label}
                    {props.required ? <span className="required"> * </span> : ''}
                    {props.blockInfo.length !== 0 ?
                        <i
                        className="nc-icon nc-alert-circle-exc"
                        data-toggle="tooltip"
                        data-placement="right"
                        style={{ transform: 'rotate(180deg)' }}
                        data-original-title={props.blockInfo}
                    ></i> : ''
                }
                </label>
            <div className={`col - xs - 11 col-lg-${props.inputWidth}`}>
                <select
                    className="form-control"
                    name={props.name}
                    value={props.value}
                    onChange={props.handleOnChange}
                >
                    <option value=''>{props.placeholder}</option>
                    {array.map((option, index) => <option key={index} value={index} >{option}</option>)}
                </select>
                {props.error &&
                    <span className="help-block text-danger">
                        {props.error}
                    </span>
                }
            </div>
        </>
    )
}
export default Select;