'use client'

import React, { KeyboardEventHandler, useId, useMemo } from 'react'

import dynamic from 'next/dynamic'
import { COLOR_CONFIG } from '../../../config/tailwind'
const CreatableSelect = dynamic(() => import('react-select/creatable'), {
    ssr: false,
})

const components = {
    DropdownIndicator: null,
}

interface Option {
    label: string
    value: string
}

const createOption = (label: string) => ({
    label,
    value: label,
})

export const CreatableInput = ({
    defaultValues = [],
    name
}: {
    defaultValues: Option[];
    name?: string
}) => {
    const [inputValue, setInputValue] = React.useState('')
    const [value, setValue] = React.useState<readonly Option[]>(defaultValues)

    const handleKeyDown: KeyboardEventHandler = event => {
        if (!inputValue) return
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                if (!value.includes(createOption(inputValue))) {
                    setValue(prev => [...prev, createOption(inputValue)])
                    setInputValue('')
                }
                event.preventDefault()
        }
    }

    const hiddenValue = useMemo(() => JSON.stringify(value.map((v) => v.value)) || [], [value])

    return (
      <>
        <CreatableSelect
            instanceId={useId()}
            components={components}
            inputValue={inputValue}
            isClearable
            isMulti
            menuIsOpen={false}
            onChange={(e: any) => setValue(e)}
            onInputChange={newValue => setInputValue(newValue)}
            onKeyDown={handleKeyDown}
            placeholder=''
            value={value}
            classNamePrefix={'yselect'}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderRadius: '10px',
                background: COLOR_CONFIG.white['06'],
                border: 'none',
                padding: '8px'
              }),
              multiValue(base, props) {
                return {
                  ...base,
                  background: COLOR_CONFIG.white[10],
                  borderRadius: '4px',
                  fontSize: 12,
                  overflow: 'hidden',
                  color: COLOR_CONFIG.white.DEFAULT,
                  fontWeight: 500
                };
              },
              multiValueLabel(base, props) {
                return {
                  ...base,
                  color: COLOR_CONFIG.white.DEFAULT,
                  padding: 8,
                  paddingLeft: 8,
                  paddingRight: 2
                }
              },
              multiValueRemove(base, props) {
                return {
                  ...base,
                  backgroundColor: props.isFocused ? 'transparent' :'transparent',
                  paddingRight: 8
                };
              },
            }}
        />
        <input type='hidden' value={hiddenValue} name={name} />
        </>
    )
}
