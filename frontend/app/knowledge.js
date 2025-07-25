import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
  ImageBackground,
} from "react-native";

import i18n from "./translations";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 14,
  },
  screenTitle: {
  fontSize: 28,
  fontWeight: "bold",
  color: "#FFFFFF", // bright white for contrast
  textAlign: "center",
  marginBottom: 18,
  textShadowColor: "#000000", // stronger shadow
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 4,
  backgroundColor: "rgba(0, 0, 0, 0.4)", // semi-transparent dark background
  paddingVertical: 6,
  paddingHorizontal: 12,
  borderRadius: 8,
  alignSelf: "center",
  },
  languageSwitcher: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  languageButton: {
    marginHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#A47148",
    backgroundColor: "#fffaf0",
  },
  languageButtonActive: {
    backgroundColor: "#A47148",
  },
  languageButtonText: {
    color: "#A47148",
    fontWeight: "600",
  },
  languageButtonTextActive: {
    color: "#fff",
  },
  sectionContainer: {
    marginBottom: 24,
    backgroundColor: "#fff8f0",
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#e0cba3",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#7B3F00",
  },
  toggleHint: {
    fontSize: 12,
    color: "#B87333",
    marginTop: 4,
    fontStyle: "italic",
  },
  sectionContent: {
    marginTop: 14,
  },
  contentText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
    color: "#5c4423",
  },
  quoteBox: {
    backgroundColor: "#f4e4c1",
    borderLeftWidth: 6,
    borderLeftColor: "#b37d4e",
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginTop: 18,
    borderRadius: 6,
  },
});

export default function KnowledgeScreen() {
  const [expandedSections, setExpandedSections] = useState({});
  const [language, setLanguage] = useState("en");
  i18n.locale = language;

  const SECTIONS = [
    {
      id: "terms",
      title: i18n.t("sections.termsTitle"),
      content: () => (
        <>
          {i18n.translations[language].terms.map(({ term, definition }, i) => (
            <View key={i} style={{ marginBottom: 8 }}>
              <Text style={[styles.bold, styles.contentText]}>{term}</Text>
              <Text style={styles.contentText}>{definition}</Text>
            </View>
          ))}
        </>
      ),
    },
    {
      id: "principles",
      title: i18n.t("sections.principlesTitle"),
      content: () => (
        <>
          {i18n.translations[language].principles.map((item, i) => (
            <Text key={i} style={styles.contentText}>{`${i + 1}. ${item}`}</Text>
          ))}
          <View style={styles.quoteBox}>
            <Text style={styles.italic}>{i18n.t("principlesQuote")}</Text>
          </View>
        </>
      ),
    },
    {
      id: "savingStrategies",
      title: i18n.t("sections.savingStrategiesTitle"),
      content: () => (
        <>
          {i18n.translations[language].savingStrategies.map((item, i) => (
            <Text key={i} style={styles.contentText}>• {item}</Text>
          ))}
        </>
      ),
    },
    {
      id: "investmentMethods",
      title: i18n.t("sections.investmentMethodsTitle"),
      content: () => (
        <>
          <Text style={[styles.bold, styles.contentText, { fontSize: 16, marginBottom: 8 }]}>Investment Vehicles</Text>
          {i18n.translations[language].investmentVehicles.map((item, i) => (
            <Text key={i} style={styles.contentText}>• {item}</Text>
          ))}

          <Text style={[styles.bold, styles.contentText, { fontSize: 16, marginTop: 16, marginBottom: 8 }]}>Investment Strategies</Text>
          {i18n.translations[language].investmentStrategies.map(({ strategy, description, suitableFor }, i) => (
            <View key={i} style={{ marginBottom: 12 }}>
              <Text style={[styles.bold, styles.contentText]}>{strategy}</Text>
              <Text style={styles.contentText}>{description}</Text>
              <Text style={styles.italic}>Suitable for: {suitableFor}</Text>
            </View>
          ))}

          <Text style={[styles.bold, styles.contentText, { fontSize: 16, marginTop: 16, marginBottom: 8 }]}>Investment Tips</Text>
          {i18n.translations[language].investmentTips.map((tip, i) => (
            <Text key={i} style={styles.contentText}>• {tip}</Text>
          ))}
        </>
      ),
    },
    {
      id: "managingDebt",
      title: i18n.t("sections.managingDebtTitle"),
      content: () => (
        <>
          {i18n.translations[language].managingDebt.map((item, i) => (
            <Text key={i} style={styles.contentText}>• {item}</Text>
          ))}
        </>
      ),
    },
    {
      id: "planningGoals",
      title: i18n.t("sections.planningGoalsTitle"),
      content: () => (
        <>
          {i18n.translations[language].planningGoals.map((item, i) => (
            <Text key={i} style={styles.contentText}>• {item}</Text>
          ))}
        </>
      ),
    },
  ];

  const LANGUAGES = [
    { code: "en", label: "EN" },
    { code: "hi", label: "HI" },
    { code: "mr", label: "MR" },
    { code: "bn", label: "BN" },
  ];

  const handleToggle = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ImageBackground
      source={require("../assets/handicraft_bg.jpg")}
      resizeMode="cover"
      style={styles.screen}
    >
      <View style={styles.languageSwitcher}>
        {LANGUAGES.map(({ code, label }) => {
          const isActive = language === code;
          return (
            <TouchableOpacity
              key={code}
              onPress={() => setLanguage(code)}
              style={[styles.languageButton, isActive && styles.languageButtonActive]}
            >
              <Text style={[styles.languageButtonText, isActive && styles.languageButtonTextActive]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.screenTitle}>{i18n.t("screenTitle")}</Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 96 }}>
        {SECTIONS.map(({ id, title, content }) => (
          <View key={id} style={styles.sectionContainer}>
            <TouchableOpacity onPress={() => handleToggle(id)} activeOpacity={0.7}>
              <Text style={styles.sectionTitle}>{title}</Text>
              <Text style={styles.toggleHint}>
                {expandedSections[id] ? "▲ Tap to collapse" : "▼ Tap to expand"}
              </Text>
            </TouchableOpacity>
            {expandedSections[id] && <View style={styles.sectionContent}>{content()}</View>}
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}