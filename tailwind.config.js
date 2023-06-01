/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          'focusBorder': '#6cb8e6',
          'foreground': '#e3eaf2',
          'activityBar.background': '#0b121b',
          'activityBar.foreground': '#d0dae7',
          'activityBar.border': '#0b121b',
          'activityBar.activeBorder': '#d0dae7',
          'activityBar.activeBackground': '#0b121b',
          'activityBar.activeFocusBorder': '#6cb8e6',
          'activityBar.inactiveForeground': '#d0dae7da',
          'activityBar.dropBorder': '#6cb8e6',
          'activityBarBadge.background': '#6cb8e6',
          'activityBarBadge.foreground': '#111b27',
          'badge.background': '#6cb8e6',
          'badge.foreground': '#111b27',
          'breadcrumb.background': '#111b278a',
          'breadcrumb.foreground': '#e3eaf2ba',
          'breadcrumb.focusForeground': '#e3eaf2',
          'breadcrumb.activeSelectionForeground': '#e3eaf2',
          'breadcrumbPicker.background': '#213043',
          'button.background': '#6cb8e6',
          'button.foreground': '#111b27',
          'button.hoverBackground': '#6cb8e6ca',
          'button.secondaryBackground': '#3c526d',
          'button.secondaryForeground': '#e3eaf2',
          'checkbox.background': '#0b121b7a',
          'checkbox.foreground': '#d0dae7',
          'checkbox.border': '#0b121b',
          'contrastActiveBorder': '#0b121b00',
          'contrastBorder': '#0b121b00',
          'debugConsole.errorForeground': '#cd6660',
          'debugConsole.infoForeground': '#6cb8e6',
          'debugConsole.sourceForeground': '#6cb8e6',
          'debugConsole.warningForeground': '#e9ae7e',
          'debugConsoleInputIcon.foreground': '#66cccc',
          'debugExceptionWidget.background': '#213043',
          'debugExceptionWidget.border': '#0b121b',
          'debugIcon.breakpointCurrentStackframeForeground': '#91d076',
          'debugIcon.breakpointDisabledForeground': '#e9ae7e',
          'debugIcon.breakpointForeground': '#e9ae7e',
          'debugIcon.breakpointStackframeForeground': '#6cb8e6',
          'debugIcon.breakpointUnverifiedForeground': '#c699e3',
          'debugIcon.continueForeground': '#6cb8e6',
          'debugIcon.pauseForeground': '#6cb8e6',
          'debugIcon.restartForeground': '#e9ae7e',
          'debugIcon.startForeground': '#91d076',
          'debugIcon.stepBackForeground': '#e6d37a',
          'debugIcon.stepIntoForeground': '#e6d37a',
          'debugIcon.stepOutForeground': '#e6d37a',
          'debugIcon.stepOverForeground': '#e6d37a',
          'debugIcon.stopForeground': '#cd6660',
          'debugTokenExpression.boolean': '#e6d37a',
          'debugTokenExpression.error': '#cd6660',
          'debugTokenExpression.name': '#6cb8e6',
          'debugTokenExpression.number': '#e6d37a',
          'debugTokenExpression.string': '#91d076',
          'debugTokenExpression.value': '#f4adf4',
          'debugToolBar.background': '#213043',
          'debugToolBar.border': '#0b121b',
          'debugView.stateLabelBackground': '#3c526dba',
          'debugView.stateLabelForeground': '#d0dae7',
          'debugView.valueChangedHighlight': '#3c526d',
          'descriptionForeground': '#8da1b9',
          'diffEditor.border': '#0b121b',
          'diffEditor.diagonalFill': '#3c526d7a',
          'diffEditor.insertedTextBackground': '#91d0761a',
          'diffEditor.insertedTextBorder': '#91d0761a',
          'diffEditor.removedTextBackground': '#cd66601a',
          'diffEditor.removedTextBorder': '#cd66601a',
          'dropdown.background': '#0b121b7a',
          'dropdown.foreground': '#d0dae7',
          'dropdown.border': '#0b121b',
          'dropdown.listBackground': '#213043',
          'editor.background': '#111b27',
          'editor.foreground': '#e3eaf2',
          'editor.inactiveSelectionBackground': '#3c526d4a',
          'editor.findMatchBackground': '#6cb8e62a',
          'editor.findMatchBorder': '#6cb8e61a',
          'editor.findMatchHighlightBackground': '#6cb8e62a',
          'editor.findMatchHighlightBorder': '#6cb8e67a',
          'editor.focusedStackFrameHighlightBackground': '#3c526d4a',
          'editor.foldBackground': '#3c526d2a',
          'editor.hoverHighlightBackground': '#3c526d8a',
          'editor.lineHighlightBackground': '#213043da',
          'editor.lineHighlightBorder': '#213043',
          'editor.onTypeRenameBackground': '#213043',
          'editor.rangeHighlightBackground': '#213043da',
          'editor.rangeHighlightBorder': '#213043',
          'editor.selectionBackground': '#3c526d8a',
          'editor.selectionHighlightBackground': '#3c526d6a',
          'editor.selectionHighlightBorder': '#3c526d6a',
          'editor.snippetFinalTabstopHighlightBackground': '#3c526d3a',
          'editor.snippetFinalTabstopHighlightBorder': '#3c526dda',
          'editor.snippetTabstopHighlightBackground': '#3c526d2a',
          'editor.snippetTabstopHighlightBorder': '#3c526dba',
          'editor.stackFrameHighlightBackground': '#3c526d4a',
          'editor.symbolHighlightBackground': '#6cb8e62a',
          'editor.symbolHighlightBorder': '#6cb8e61a',
          'editor.wordHighlightBackground': '#3c526d4a',
          'editor.wordHighlightBorder': '#3c526d7a',
          'editor.wordHighlightStrongBackground': '#3c526d2a',
          'editor.wordHighlightStrongBorder': '#3c526d',
          'editorBracketMatch.background': '#6cb8e61a',
          'editorBracketMatch.border': '#6cb8e6da',
          'editorCodeLens.foreground': '#8da1b9',
          'editorCursor.background': '#111b27',
          'editorCursor.foreground': '#e3eaf2',
          'editorError.border': '#cd666000',
          'editorError.foreground': '#cd6660',
          'editorGutter.addedBackground': '#91d076',
          'editorGutter.background': '#0b121b7a',
          'editorGutter.deletedBackground': '#cd6660',
          'editorGutter.foldingControlForeground': '#e3eaf2',
          'editorGutter.modifiedBackground': '#e6d37a',
          'editorGroup.border': '#0b121b',
          'editorGroup.dropBackground': '#6cb8e61a',
          'editorGroup.emptyBackground': '#111b27',
          'editorGroup.focusedEmptyBorder': '#6cb8e6',
          'editorGroupHeader.border': '#0b121b',
          'editorGroupHeader.noTabsBackground': '#111b27',
          'editorGroupHeader.tabsBackground': '#0b121b7a',
          'editorGroupHeader.tabsBorder': '#0b121b',
          'editorHint.border': '#e6d37a00',
          'editorHint.foreground': '#e6d37a',
          'editorHoverWidget.background': '#213043',
          'editorHoverWidget.border': '#0b121b',
          'editorHoverWidget.foreground': '#d0dae7',
          'editorHoverWidget.statusBarBackground': '#0b121bda',
          'editorIndentGuide.background': '#8da1b93a',
          'editorIndentGuide.activeBackground': '#8da1b97a',
          'editorInfo.border': '#6cb8e600',
          'editorInfo.foreground': '#6cb8e6',
          'editorLineNumber.foreground': '#8da1b9da',
          'editorLineNumber.activeForeground': '#8da1b9',
          'editorLightBulb.foreground': '#e6d37a',
          'editorLightBulbAutoFix.foreground': '#e6d37a',
          'editorLink.activeForeground': '#6cb8e6',
          'editorMarkerNavigation.background': '#213043',
          'editorMarkerNavigationError.background': '#cd6660',
          'editorMarkerNavigationInfo.background': '#6cb8e6',
          'editorMarkerNavigationWarning.background': '#e9ae7e',
          'editorOverviewRuler.background': '#111b27',
          'editorOverviewRuler.border': '#0b121b',
          'editorOverviewRuler.addedForeground': '#91d076',
          'editorOverviewRuler.deletedForeground': '#cd6660',
          'editorOverviewRuler.errorForeground': '#cd6660',
          'editorOverviewRuler.infoForeground': '#6cb8e6',
          'editorOverviewRuler.modifiedForeground': '#e6d37a',
          'editorOverviewRuler.warningForeground': '#e9ae7e',
          'editorOverviewRuler.bracketMatchForeground': '#6cb8e6da',
          'editorOverviewRuler.commonContentForeground': '#6cb8e6',
          'editorOverviewRuler.currentContentForeground': '#6cb8e6da',
          'editorOverviewRuler.findMatchForeground': '#6cb8e67a',
          'editorOverviewRuler.incomingContentForeground': '#66ccccda',
          'editorOverviewRuler.rangeHighlightForeground': '#213043',
          'editorOverviewRuler.selectionHighlightForeground': '#3c526d',
          'editorOverviewRuler.wordHighlightForeground': '#3c526d',
          'editorOverviewRuler.wordHighlightStrongForeground': '#8da1b9da',
          'editorPane.background': '#0b121b4a',
          'editorRuler.foreground': '#8da1b93a',
          'editorSuggestWidget.background': '#213043',
          'editorSuggestWidget.border': '#0b121b',
          'editorSuggestWidget.foreground': '#d0dae7',
          'editorSuggestWidget.highlightForeground': '#6cb8e6',
          'editorSuggestWidget.selectedBackground': '#3c526d',
          'editorUnnecessaryCode.border': '#8da1b92a',
          'editorUnnecessaryCode.opacity': '#8da1b9ba',
          'editorWarning.border': '#e9ae7e00',
          'editorWarning.foreground': '#e9ae7e',
          'editorWhitespace.foreground': '#8da1b95a',
          'editorWidget.background': '#213043',
          'editorWidget.border': '#0b121b',
          'editorWidget.foreground': '#d0dae7',
          'editorWidget.resizeBorder': '#3c526d',
          'errorForeground': '#cd6660',
          'extensionButton.prominentBackground': '#6cb8e6',
          'extensionButton.prominentForeground': '#111b27',
          'extensionButton.prominentHoverBackground': '#6cb8e6ca',
          'gitDecoration.addedResourceForeground': '#91d076',
          'gitDecoration.conflictingResourceForeground': '#e9ae7e',
          'gitDecoration.deletedResourceForeground': '#cd6660',
          'gitDecoration.ignoredResourceForeground': '#8da1b9',
          'gitDecoration.modifiedResourceForeground': '#e6d37a',
          'gitDecoration.stageDeletedResourceForeground': '#91d076',
          'gitDecoration.stageModifiedResourceForeground': '#91d076',
          'gitDecoration.submoduleResourceForeground': '#66cccc',
          'gitDecoration.untrackedResourceForeground': '#f4adf4',
          'gitlens.gutterBackgroundColor': '#0b121b',
          'gitlens.gutterForegroundColor': '#d0dae7',
          'gitlens.gutterUncommittedForegroundColor': '#91d076',
          'gitlens.lineHighlightBackgroundColor': '#2130437a',
          'gitlens.lineHighlightOverviewRulerColor': '#3c526d',
          'gitlens.trailingLineBackgroundColor': '#3c526d5a',
          'gitlens.trailingLineForegroundColor': '#d0dae7ca',
          'icon.foreground': '#e3eaf2',
          'imagePreview.border': '#0b121b',
          'input.background': '#0b121b7a',
          'input.foreground': '#d0dae7',
          'input.border': '#0b121b',
          'input.placeholderForeground': '#8da1b9',
          'inputOption.activeBackground': '#213043ba',
          'inputOption.activeBorder': '#6cb8e6',
          'inputOption.activeForeground': '#6cb8e6',
          'inputValidation.errorBackground': '#213043',
          'inputValidation.errorForeground': '#cd6660',
          'inputValidation.errorBorder': '#cd6660',
          'inputValidation.infoBackground': '#213043',
          'inputValidation.infoForeground': '#6cb8e6',
          'inputValidation.infoBorder': '#6cb8e6',
          'inputValidation.warningBackground': '#213043',
          'inputValidation.warningForeground': '#e9ae7e',
          'inputValidation.warningBorder': '#e9ae7e',
          'list.activeSelectionBackground': '#3c526dba',
          'list.activeSelectionForeground': '#e3eaf2',
          'list.deemphasizedForeground': '#66cccc',
          'list.dropBackground': '#6cb8e61a',
          'list.errorForeground': '#cd6660',
          'list.filterMatchBackground': '#6cb8e62a',
          'list.filterMatchBorder': '#6cb8e67a',
          'list.focusBackground': '#3c526dba',
          'list.focusForeground': '#e3eaf2',
          'list.highlightForeground': '#6cb8e6',
          'list.hoverBackground': '#3c526d7a',
          'list.hoverForeground': '#e3eaf2',
          'list.inactiveFocusBackground': '#3c526d5a',
          'list.inactiveSelectionBackground': '#3c526d4a',
          'list.inactiveSelectionForeground': '#e3eaf2da',
          'list.invalidItemForeground': '#cd6660',
          'list.warningForeground': '#e9ae7e',
          'listFilterWidget.background': '#213043',
          'listFilterWidget.outline': '#3c526d',
          'listFilterWidget.noMatchesOutline': '#cd6660',
          'menu.background': '#213043',
          'menu.border': '#0b121b',
          'menu.foreground': '#f0f4f8',
          'menu.selectionBackground': '#3c526d8a',
          'menu.selectionBorder': '#3c526d',
          'menu.selectionForeground': '#f0f4f8',
          'menu.separatorBackground': '#0b121b',
          'menubar.selectionBackground': '#213043',
          'menubar.selectionBorder': '#3c526d00',
          'menubar.selectionForeground': '#f0f4f8',
          'merge.border': '#0b121b',
          'merge.currentContentBackground': '#6cb8e62a',
          'merge.currentHeaderBackground': '#6cb8e65a',
          'merge.incomingContentBackground': '#66cccc2a',
          'merge.incomingHeaderBackground': '#66cccc5a',
          'minimap.background': '#111b27',
          'minimap.errorHighlight': '#cd6660',
          'minimap.findMatchHighlight': '#6cb8e6',
          'minimap.selectionHighlight': '#3c526d',
          'minimap.warningHighlight': '#e9ae7e',
          'minimapGutter.addedBackground': '#91d076',
          'minimapGutter.deletedBackground': '#cd6660',
          'minimapGutter.modifiedBackground': '#e6d37a',
          'minimapSlider.background': '#3c526d4a',
          'minimapSlider.hoverBackground': '#3c526d7a',
          'minimapSlider.activeBackground': '#3c526d8a',
          'notebook.focusedRowBorder': '#213043ba',
          'notebook.rowHoverBackground': '#213043ba',
          'notificationCenterHeader.background': '#213043',
          'notificationCenterHeader.foreground': '#d0dae7',
          'notificationCenter.border': '#0b121b',
          'notifications.background': '#213043',
          'notifications.foreground': '#d0dae7',
          'notifications.border': '#0b121b',
          'notificationsErrorIcon.foreground': '#cd6660',
          'notificationsInfoIcon.foreground': '#6cb8e6',
          'notificationLink.foreground': '#6cb8e6',
          'notificationToast.border': '#0b121b',
          'notificationsWarningIcon.foreground': '#e9ae7e',
          'panel.background': '#111b27',
          'panel.border': '#0b121b',
          'panel.dropBorder': '#6cb8e6',
          'panelTitle.activeBorder': '#e3eaf2',
          'panelTitle.activeForeground': '#e3eaf2',
          'panelTitle.inactiveForeground': '#e3eaf2',
          'peekView.border': '#0b121b',
          'peekViewEditor.background': '#0b121b8a',
          'peekViewEditor.matchHighlightBackground': '#6cb8e63a',
          'peekViewEditor.matchHighlightBorder': '#6cb8e600',
          'peekViewEditorGutter.background': '#2130432a',
          'peekViewResult.background': '#2130437a',
          'peekViewResult.fileForeground': '#d0dae7',
          'peekViewResult.lineForeground': '#d0dae7',
          'peekViewResult.matchHighlightBackground': '#6cb8e62a',
          'peekViewResult.selectionBackground': '#3c526d5a',
          'peekViewResult.selectionForeground': '#e3eaf2',
          'peekViewTitle.background': '#213043',
          'peekViewTitleDescription.foreground': '#d0dae7',
          'peekViewTitleLabel.foreground': '#f0f4f8',
          'pickerGroup.foreground': '#6cb8e6',
          'pickerGroup.border': '#6cb8e6',
          'problemsErrorIcon.foreground': '#cd6660',
          'problemsInfoIcon.foreground': '#6cb8e6',
          'problemsWarningIcon.foreground': '#e9ae7e',
          'progressBar.background': '#6cb8e6',
          'quickInput.background': '#213043',
          'quickInput.foreground': '#d0dae7',
          'searchEditor.findMatchBackground': '#6cb8e61a',
          'searchEditor.findMatchBorder': '#6cb8e67a',
          'searchEditor.textInputBorder': '#0b121b',
          'selection.background': '#6cb8e65a',
          'settings.checkboxBackground': '#0b121b7a',
          'settings.checkboxForeground': '#d0dae7',
          'settings.checkboxBorder': '#0b121b',
          'settings.dropdownBackground': '#0b121b7a',
          'settings.dropdownForeground': '#d0dae7',
          'settings.dropdownBorder': '#0b121b',
          'settings.focusedRowBackground': '#2130438a',
          'settings.headerForeground': '#e3eaf2',
          'settings.modifiedItemIndicator': '#e6d37a',
          'settings.numberInputBackground': '#0b121b7a',
          'settings.numberInputForeground': '#d0dae7',
          'settings.numberInputBorder': '#0b121b',
          'settings.textInputBackground': '#0b121b7a',
          'settings.textInputForeground': '#d0dae7',
          'settings.textInputBorder': '#0b121b',
          'sideBar.background': '#111b27',
          'sideBar.foreground': '#e3eaf2',
          'sideBar.border': '#0b121b',
          'sideBar.dropBackground': '#6cb8e61a',
          'sideBarSectionHeader.background': '#0b121bba',
          'sideBarSectionHeader.foreground': '#d0dae7',
          'sideBarSectionHeader.border': '#0b121b',
          'sideBarTitle.foreground': '#e3eaf2',
          'scrollbar.shadow': '#0b121b',
          'scrollbarSlider.background': '#3c526d4a',
          'scrollbarSlider.hoverBackground': '#3c526d7a',
          'scrollbarSlider.activeBackground': '#3c526d8a',
          'statusBar.background': '#6cb8e6',
          'statusBar.foreground': '#111b27',
          'statusBar.border': '#0b121b',
          'statusBarItem.activeBackground': '#3c526d8a',
          'statusBarItem.hoverBackground': '#3c526d6a',
          'statusBar.debuggingBackground': '#e9ae7e',
          'statusBar.debuggingBorder': '#0b121b',
          'statusBar.debuggingForeground': '#111b27',
          'statusBar.noFolderBackground': '#0b121b',
          'statusBar.noFolderBorder': '#0b121b',
          'statusBar.noFolderForeground': '#d0dae7',
          'statusBarItem.prominentBackground': '#3c526d',
          'statusBarItem.prominentForeground': '#e3eaf2',
          'statusBarItem.prominentHoverBackground': '#111b277a',
          'symbolIcon.arrayForeground': '#8da1b9',
          'symbolIcon.booleanForeground': '#8da1b9',
          'symbolIcon.classForeground': '#8da1b9',
          'symbolIcon.colorForeground': '#8da1b9',
          'symbolIcon.constantForeground': '#8da1b9',
          'symbolIcon.constructorForeground': '#8da1b9',
          'symbolIcon.enumeratorForeground': '#8da1b9',
          'symbolIcon.enumeratorMemberForeground': '#8da1b9',
          'symbolIcon.eventForeground': '#8da1b9',
          'symbolIcon.fieldForeground': '#8da1b9',
          'symbolIcon.fileForeground': '#8da1b9',
          'symbolIcon.folderForeground': '#8da1b9',
          'symbolIcon.functionForeground': '#8da1b9',
          'symbolIcon.interfaceForeground': '#8da1b9',
          'symbolIcon.keyForeground': '#8da1b9',
          'symbolIcon.keywordForeground': '#8da1b9',
          'symbolIcon.methodForeground': '#8da1b9',
          'symbolIcon.moduleForeground': '#8da1b9',
          'symbolIcon.namespaceForeground': '#8da1b9',
          'symbolIcon.nullForeground': '#8da1b9',
          'symbolIcon.numberForeground': '#8da1b9',
          'symbolIcon.objectForeground': '#8da1b9',
          'symbolIcon.operatorForeground': '#8da1b9',
          'symbolIcon.packageForeground': '#8da1b9',
          'symbolIcon.propertyForeground': '#8da1b9',
          'symbolIcon.referenceForeground': '#8da1b9',
          'symbolIcon.snippetForeground': '#8da1b9',
          'symbolIcon.stringForeground': '#8da1b9',
          'symbolIcon.structForeground': '#8da1b9',
          'symbolIcon.textForeground': '#8da1b9',
          'symbolIcon.typeParameterForeground': '#8da1b9',
          'symbolIcon.unitForeground': '#8da1b9',
          'symbolIcon.variableForeground': '#8da1b9',
          'tab.activeBackground': '#2130438a',
          'tab.activeForeground': '#d0dae7',
          'tab.activeBorder': '#6cb8e6',
          'tab.activeBorderTop': '#6cb8e6',
          'tab.activeModifiedBorder': '#e6d37a',
          'tab.border': '#0b121b',
          'tab.hoverBackground': '#213043',
          'tab.hoverForeground': '#f0f4f8',
          'tab.hoverBorder': '#0b121b',
          'tab.inactiveBackground': '#111b27',
          'tab.inactiveForeground': '#e3eaf2ba',
          'tab.inactiveModifiedBorder': '#e6d37a',
          'tab.lastPinnedBorder': '#3c526d',
          'tab.unfocusedActiveBackground': '#2130435a',
          'tab.unfocusedActiveForeground': '#d0dae7',
          'tab.unfocusedActiveBorder': '#6cb8e6',
          'tab.unfocusedActiveBorderTop': '#6cb8e6',
          'tab.unfocusedActiveModifiedBorder': '#e6d37a',
          'tab.unfocusedHoverBackground': '#213043',
          'tab.unfocusedHoverForeground': '#f0f4f8',
          'tab.unfocusedHoverBorder': '#0b121b',
          'tab.unfocusedInactiveBackground': '#111b27ba',
          'tab.unfocusedInactiveForeground': '#e3eaf29a',
          'tab.unfocusedInactiveModifiedBorder': '#e6d37a',
          'terminal.background': '#111b27',
          'terminal.foreground': '#e3eaf2',
          'terminal.border': '#0b121b',
          'terminal.selectionBackground': '#3c526d',
          'terminal.ansiBlack': '#111b27',
          'terminal.ansiBlue': '#6cb8e6',
          'terminal.ansiCyan': '#66cccc',
          'terminal.ansiGreen': '#91d076',
          'terminal.ansiMagenta': '#f4adf4',
          'terminal.ansiRed': '#cd6660',
          'terminal.ansiWhite': '#e3eaf2',
          'terminal.ansiYellow': '#e6d37a',
          'terminal.ansiBrightBlack': '#8da1b9',
          'terminal.ansiBrightBlue': '#6cb8e6',
          'terminal.ansiBrightCyan': '#66cccc',
          'terminal.ansiBrightGreen': '#91d076',
          'terminal.ansiBrightMagenta': '#f4adf4',
          'terminal.ansiBrightRed': '#cd6660',
          'terminal.ansiBrightWhite': '#f0f4f8',
          'terminal.ansiBrightYellow': '#e6d37a',
          'terminalCursor.foreground': '#e3eaf2',
          'terminalCursor.background': '#111b27',
          'textBlockQuote.background': '#213043',
          'textBlockQuote.border': '#6cb8e6',
          'textCodeBlock.background': '#3c526d',
          'textLink.foreground': '#6cb8e6',
          'textLink.activeForeground': '#6cb8e6ba',
          'textPreformat.foreground': '#e9ae7e',
          'titleBar.activeBackground': '#0b121b',
          'titleBar.activeForeground': '#d0dae7',
          'titleBar.border': '#0b121b',
          'titleBar.inactiveBackground': '#0b121bba',
          'titleBar.inactiveForeground': '#d0dae7ba',
          'tree.indentGuidesStroke': '#8da1b95a',
          'welcomePage.background': '#111b27',
          'welcomePage.buttonBackground': '#3c526d4a',
          'welcomePage.buttonHoverBackground': '#3c526d8a',
          'walkThrough.embeddedEditorBackground': '#213043',
          'widget.shadow': '#0b121b',
          'window.activeBorder': '#0b121b',
          'window.inactiveBorder': '#0b121b7a'
        },
        'glitch': {
          // https://www.pinterest.com/pin/442126888412796915/
          yellow: '#ffd319',
          orange: '#ff901f',
          red: '#ff2975',
          pink: '#f222ff',
          purple: '#8b13d4',
          green: '#a1be01'
        }
      },
      fontFamily: {
        primary: ['var(--font-righteous)']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}