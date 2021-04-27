import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { BodySwitch as ToggleSwitch } from '../ToggleSwitch/styles'
import { BodySwitch, Error } from './styles'
import { IoMdAlert } from 'react-icons/io'
interface IOptionsCheckbox {
  id: string
  value: string
  label?: string
  message: string
  defaultChecked?: boolean
}

interface InputProps {
  name: string
  options: Array<IOptionsCheckbox>
}

const ProfileTypeToogleSwitch: React.FC<InputProps> = ({ name, options }) => {
  const inputRefs = useRef<HTMLInputElement[]>([])
  const { fieldName, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value)
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach(ref => {
          ref.checked = false
        })
      },
      setValue: (refs: HTMLInputElement[], value) => {
        refs.forEach(ref => {
          if (value.includes(ref.id)) {
            ref.checked = true
          }
        })
      },
    })
  }, [fieldName, registerField])

  return (
    <BodySwitch>
      <section>
        <legend>
          Tipo de Perfil
          {error && (
            <Error message={error}>
              <IoMdAlert />
            </Error>
          )}
        </legend>
        <span>Selecione um ou mais tipos</span>
      </section>
      {options.map((option, index) => (
        <fieldset key={option.id}>
          <legend>{option.label}</legend>
          <aside>
            <p>{option.message}</p>
            <ToggleSwitch>
              <label htmlFor={option.id}>
                <input
                  className="checkbox"
                  defaultChecked={option.defaultChecked}
                  ref={ref => {
                    inputRefs.current[index] = ref as HTMLInputElement
                  }}
                  name={fieldName}
                  value={option.value}
                  type="checkbox"
                  id={option.id}
                />
                <label htmlFor={option.id} className="switch" />
              </label>
            </ToggleSwitch>
          </aside>
        </fieldset>
      ))}
    </BodySwitch>
  )
}

export default ProfileTypeToogleSwitch
