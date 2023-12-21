import React from 'react'
import { View, Text, TextInput, StyleSheet, ViewStyle, StyleProp } from 'react-native'
import { Controller, FieldValues, FieldPath, RegisterOptions } from 'react-hook-form'

interface InputFormProps<TFieldValues extends FieldValues = FieldValues> {
  label: string
  name: FieldPath<TFieldValues>
  control: any
  rules?: RegisterOptions
  placeholder: string
  errors: any
  isPassword?: boolean
  showBorder?: boolean
  onChangeText?: (text: string) => void
  style?: StyleProp<ViewStyle> & { inputStyle?: ViewStyle }
}

const InputForm: React.FC<InputFormProps> = ({
  label,
  name,
  control,
  rules,
  placeholder,
  errors,
  isPassword,
  showBorder = true,
  onChangeText,
  style,
}) => {
  const hasError = errors && errors[name]
  const inputStyle = style?.inputStyle
  return (
    <View style={[styles.container]}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        key={name}
        control={control}
        render={({ field }) => (
          <TextInput
            style={[
              styles.input,
              hasError && { borderColor: 'red' },
              !showBorder && { borderWidth: 0 },
              inputStyle,
            ]}
            placeholder={placeholder}
            value={field.value}
            onBlur={field.onBlur}
            secureTextEntry={isPassword}
            placeholderTextColor={'#808080'}
            onChangeText={(text) => {
              field.onChange(text)
              if (onChangeText) {
                onChangeText(text)
              }
            }}
          />
        )}
        name={name}
        rules={rules}
      />
      {hasError && <Text style={{ color: 'red' }}>{errors[name].message}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#808080',
    fontWeight: '600',
  },
  input: {
    height: 42,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    color: '#000000',
  },
})

export default InputForm
