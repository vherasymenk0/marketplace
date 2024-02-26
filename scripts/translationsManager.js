/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const chalk = require('chalk')
const { program } = require('commander')

program
  .option('--lang, --lang <type>', 'en')
  .option('--path, --path <type>', './src/i18n/locales')
  .option('--new-translations, --new-translations <type>', 'newTranslations')

program.parse(process.argv)

const options = program.opts()
const langArgs = options.lang.split(',')
const localePath = options.path
const newTranslationsFileName = options.newTranslations

// Delete key in obj1
const deleteKeys = (obj1, obj2, isLogs) => {
  const result = []
  let actualKeys = obj1
  const deletedKeys = {}
  const secondObjKeys = Object.keys(obj2) || []

  // Find unnecessary key for delete
  Object.keys(obj1 || {}).forEach((key) => {
    if (!secondObjKeys.includes(key)) {
      result.push(key)
      deletedKeys[key] = obj1[key]
    }
  })

  if (result.length) {
    if (isLogs) {
      console.log(chalk.bgRed('Unresolved keys:'))
    }

    result.forEach((key) => {
      const { [key]: _item, ...rest } = obj1

      if (isLogs) {
        console.log(`${chalk.red(key)}: ${chalk.red(obj1[key])}`)
      }

      actualKeys = rest
      obj1 = rest
    })
  }

  return { result: actualKeys, deletedKeys }
}

const addNewKeys = (obj1, obj2) => {
  let result = {}
  const addedKeys = {}
  const firstObjKeys = Object.keys(obj1) || []

  Object.keys(obj2 || {}).forEach((key) => {
    if (!firstObjKeys.includes(key)) {
      addedKeys[key] = obj2[key]
    }
  })

  result = { ...obj1, ...addedKeys }

  return { result, addedKeys }
}

const updateTranslations = (languages) => {
  languages.map((lang) => {
    let unresolvedKeys = {}
    const translations = require(path.resolve(`${localePath}/${lang}/${lang}.json`))
    // Extract newly generated messages based on defaultMessage
    const messagesWithActualKeys = require(path.resolve(`${localePath}/defaultMessages.json`))

    // Remove unused keys from translations
    const { result: translationsWithoutOldKeys, deletedKeys } = deleteKeys(
      translations,
      messagesWithActualKeys,
    )
    // Add new keys from messagesWithActualKeys
    const { result: translationsWithActualKeys, addedKeys } = addNewKeys(
      translationsWithoutOldKeys,
      messagesWithActualKeys,
    )

    let unorderedTranslations = {
      ...translationsWithActualKeys,
    }

    const newTranslationsFilePath = `${localePath}/${lang}/${newTranslationsFileName}.json`
    const isNewTranslationsFileExist = fs.existsSync(newTranslationsFilePath)

    if (isNewTranslationsFileExist) {
      const newTranslations = require(path.resolve(newTranslationsFilePath))
      // Remove unused keys from newTranslations
      const { result: updateLocalClient, deletedKeys: outdatedKeys } = deleteKeys(
        newTranslations,
        translationsWithActualKeys,
        true,
      )
      unresolvedKeys = outdatedKeys

      unorderedTranslations = {
        ...translationsWithActualKeys,
        ...updateLocalClient,
      }
    }

    const orderedTranslations = Object.keys(unorderedTranslations)
      .sort()
      .reduce((obj, key) => {
        obj[key] = unorderedTranslations[key]
        return obj
      }, {})

    // Rewrite the translations
    fs.writeFile(
      `${localePath}/${lang}/${lang}.json`,
      JSON.stringify(orderedTranslations, null, 2),
      (err) => {
        if (err) {
          console.log(err)
        }
      },
    )

    if (isNewTranslationsFileExist) {
      // Clear file
      fs.writeFile(`${localePath}/${lang}/${newTranslationsFileName}.json`, '{}', (err) => {
        if (err) {
          console.log(err)
        }
      })
    }

    // Create a file with the differences between the old and new translations
    fs.writeFile(
      `${localePath}/${lang}/diff.json`,
      JSON.stringify(
        {
          deletedKeys,
          addedKeys,
          unresolvedKeys,
        },
        null,
        2,
      ),
      (err) => {
        if (err) {
          console.log(err)
        }
      },
    )
  })
}

// Call for the necessary translations
updateTranslations(langArgs)
