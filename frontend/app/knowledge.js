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
} from "react-native";

import i18n from "./translations";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 48,
    backgroundColor: "#f5f7fa",
    paddingHorizontal: 14,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2e70bb",
    textAlign: "center",
    marginBottom: 18,
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
    borderColor: "#2e70bb",
  },
  languageButtonActive: {
    backgroundColor: "#2e70bb",
  },
  languageButtonText: {
    color: "#2e70bb",
    fontWeight: "600",
  },
  languageButtonTextActive: {
    color: "#fff",
  },

  sectionContainer: {
    marginBottom: 32,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2e70bb",
  },
  toggleHint: {
    fontSize: 12,
    color: "#5a7abf",
    marginTop: 4,
    fontStyle: "italic",
  },
  sectionContent: {
    marginTop: 14,
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
              <Text style={{ fontWeight: "bold" }}>{term}</Text>
              <Text>{definition}</Text>
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
            <Text key={i} style={{ marginBottom: 6 }}>
              {`${i + 1}. ${item}`}
            </Text>
          ))}
          <View
            style={{
              backgroundColor: "#e0edff",
              borderLeftWidth: 6,
              borderLeftColor: "#2e70bb",
              paddingHorizontal: 14,
              paddingVertical: 10,
              marginTop: 18,
              borderRadius: 4,
            }}
          >
            <Text style={{ fontStyle: "italic", color: "#23395d" }}>
              {i18n.t("principlesQuote")}
            </Text>
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
            <Text key={i} style={{ marginBottom: 6 }}>
              • {item}
            </Text>
          ))}
        </>
      ),
    },
    {
      id: "investmentMethods",
      title: i18n.t("sections.investmentMethodsTitle"),
      content: () => (
        <>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 8 }}>
            Investment Vehicles
          </Text>
          {i18n.translations[language].investmentVehicles.map((item, i) => (
            <Text key={i} style={{ marginBottom: 6 }}>
              • {item}
            </Text>
          ))}

          <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 16, marginBottom: 8 }}>
            Investment Strategies
          </Text>
          {i18n.translations[language].investmentStrategies.map(({ strategy, description, suitableFor }, i) => (
            <View key={i} style={{ marginBottom: 12 }}>
              <Text style={{ fontWeight: "bold" }}>{strategy}</Text>
              <Text>{description}</Text>
              <Text style={{ fontStyle: "italic", color: "#666" }}>Suitable for: {suitableFor}</Text>
            </View>
          ))}

          <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 16, marginBottom: 8 }}>
            Investment Tips
          </Text>
          {i18n.translations[language].investmentTips.map((tip, i) => (
            <Text key={i} style={{ marginBottom: 6 }}>
              • {tip}
            </Text>
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
            <Text key={i} style={{ marginBottom: 6 }}>
              • {item}
            </Text>
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
            <Text key={i} style={{ marginBottom: 6 }}>
              • {item}
            </Text>
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
    <View style={styles.screen}>
      {/* Language switcher */}
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
    </View>
  );
}
