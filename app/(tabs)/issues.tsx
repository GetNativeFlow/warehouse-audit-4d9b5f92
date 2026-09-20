import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, Modal, Pressable, TextInput, ActivityIndicator } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Issues() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [state_e053751d_1040_43a1_9221_adb0cb9cbfa8, setState_e053751d_1040_43a1_9221_adb0cb9cbfa8] = useState({ selectedValue: "", selectedLabel: "" });
  const [state_03f4cc97_ec62_4fc7_8ddf_bab027593baa, setState_03f4cc97_ec62_4fc7_8ddf_bab027593baa] = useState({ selectedValue: "", selectedLabel: "" });
  const [state_797415ac_0c0a_45e8_a47e_f8bafc22dc0a, setState_797415ac_0c0a_45e8_a47e_f8bafc22dc0a] = useState({ text: "", isFocused: false });
  const [state_0c00a91f_85a9_4ed9_bbf5_549ab562e993, setState_0c00a91f_85a9_4ed9_bbf5_549ab562e993] = useState({ selectedValue: "", selectedLabel: "" });

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_45c22851_c84a_40e5_bdd2_d95f5246137f}>
              <View style={styles.node_b0694176_4110_499e_bdb1_ccf54bc50b12}>
                        <View style={styles.node_93b34916_18a2_4688_93e4_2480face708b}>
                                    <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#3B82F6" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m15 18-6-6 6-6"></Path></G></Svg></View>
                                    <Text style={styles.node_8296d560_c77b_45e7_a3b5_fb93dfb1845f}>Back to Checklist</Text>
                        </View>
                        <View style={styles.node_01c34a92_0874_4b20_9f1f_d8d0c8ca5b45}>
                                    <Text style={styles.node_6a7238f2_fbdd_4486_b8dd_27211e86e7ae}>Report Issue</Text>
                                    <View style={styles.node_ee5f6d57_ffaf_4dc9_b080_79c170e9abb3}>
                                                  <View style={{ width: 14, height: 14, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={14} height={14} fill="none"><G stroke="#F97316" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></G></Svg></View>
                                                  <Text style={styles.node_eaef513f_1fa5_4c3a_974c_7545faf36626}>#0047</Text>
                                    </View>
                        </View>
                        <Text style={styles.node_cd910b2c_68b3_4834_8b18_be282340c771}>Zone A · Bay 12 · 15 May 2026</Text>
              </View>
              <View style={styles.node_4a7698eb_9e9b_4654_9f41_c3f6dc9216da}>
                        <View style={styles.node_fa271c1b_05f0_48e1_a69e_e15e799ae543}>
                                    <View style={styles.node_60dd2ab8_5bbd_4557_88c2_6aaf29146706}>
                                                  <Text style={styles.node_970bf5f3_3543_497f_a33f_6b4e3e1935b7}>CATEGORY</Text>
                                                  {(() => { const __opts = [{"label":"Safety Hazard","value":"safety"},{"label":"Equipment Fault","value":"equipment"},{"label":"HAZMAT","value":"hazmat"}]; const [open, setOpen] = React.useState(false); const [anchor, setAnchor] = React.useState({x:0,y:0,w:0,h:0}); const triggerRef = React.useRef(null); const val = typeof state_e053751d_1040_43a1_9221_adb0cb9cbfa8 !== 'undefined' ? (state_e053751d_1040_43a1_9221_adb0cb9cbfa8.selectedValue ?? '') : ''; const __sel = __opts.find(o => o.value === val); const __label = __sel ? __sel.label : ''; const openDropdown = () => { if (triggerRef.current && triggerRef.current.measureInWindow) { triggerRef.current.measureInWindow((x,y,w,h) => { setAnchor({x,y,w,h}); setOpen(true); }); } else { setOpen(true); } }; return (<View style={styles.node_e053751d_1040_43a1_9221_adb0cb9cbfa8}><TouchableOpacity ref={triggerRef} onPress={() => { if (open) { setOpen(false); } else { openDropdown(); } }} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}><Text style={{ color: val ? '#000' : '#888' }}>{__label || 'Safety Hazard'}</Text><Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transform: [{ rotate: open ? '180deg' : '0deg' }] }}><Path d="m6 9 6 6 6-6" /></Svg></TouchableOpacity><Modal visible={open} transparent animationType="fade" onRequestClose={() => { setOpen(false); }}><Pressable style={{ flex: 1 }} onPress={() => { setOpen(false); }}><View style={{ position: 'absolute', top: anchor.y + anchor.h + 4, left: anchor.x, width: anchor.w, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 6, elevation: 8, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>{__opts.map((o, i) => <TouchableOpacity key={o.value + ':' + i} onPress={() => { if (typeof setState_e053751d_1040_43a1_9221_adb0cb9cbfa8 === 'function') setState_e053751d_1040_43a1_9221_adb0cb9cbfa8(prev => ({...prev, selectedValue: o.value, selectedLabel: o.label})); setOpen(false); }} style={{ padding: 10, borderBottomWidth: i < __opts.length - 1 ? 1 : 0, borderColor: '#eee' }}><Text>{o.label}</Text></TouchableOpacity>)}</View></Pressable></Modal></View>); })()}
                                    </View>
                                    <View style={styles.node_b0f06960_d737_49c0_9c88_6f1f03c60ad8}>
                                                  <Text style={styles.node_c863ab7d_ecbb_41de_b7da_9f099b0536d0}>LOCATION</Text>
                                                  {(() => { const __opts = [{"label":"Zone A","value":"zone_a"},{"label":"Zone B","value":"zone_b"},{"label":"Zone C","value":"zone_c"},{"label":"Zone D","value":"zone_d"}]; const [open, setOpen] = React.useState(false); const [anchor, setAnchor] = React.useState({x:0,y:0,w:0,h:0}); const triggerRef = React.useRef(null); const val = typeof state_03f4cc97_ec62_4fc7_8ddf_bab027593baa !== 'undefined' ? (state_03f4cc97_ec62_4fc7_8ddf_bab027593baa.selectedValue ?? '') : ''; const __sel = __opts.find(o => o.value === val); const __label = __sel ? __sel.label : ''; const openDropdown = () => { if (triggerRef.current && triggerRef.current.measureInWindow) { triggerRef.current.measureInWindow((x,y,w,h) => { setAnchor({x,y,w,h}); setOpen(true); }); } else { setOpen(true); } }; return (<View style={styles.node_03f4cc97_ec62_4fc7_8ddf_bab027593baa}><TouchableOpacity ref={triggerRef} onPress={() => { if (open) { setOpen(false); } else { openDropdown(); } }} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}><Text style={{ color: val ? '#000' : '#888' }}>{__label || 'Zone A'}</Text><Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transform: [{ rotate: open ? '180deg' : '0deg' }] }}><Path d="m6 9 6 6 6-6" /></Svg></TouchableOpacity><Modal visible={open} transparent animationType="fade" onRequestClose={() => { setOpen(false); }}><Pressable style={{ flex: 1 }} onPress={() => { setOpen(false); }}><View style={{ position: 'absolute', top: anchor.y + anchor.h + 4, left: anchor.x, width: anchor.w, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 6, elevation: 8, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>{__opts.map((o, i) => <TouchableOpacity key={o.value + ':' + i} onPress={() => { if (typeof setState_03f4cc97_ec62_4fc7_8ddf_bab027593baa === 'function') setState_03f4cc97_ec62_4fc7_8ddf_bab027593baa(prev => ({...prev, selectedValue: o.value, selectedLabel: o.label})); setOpen(false); }} style={{ padding: 10, borderBottomWidth: i < __opts.length - 1 ? 1 : 0, borderColor: '#eee' }}><Text>{o.label}</Text></TouchableOpacity>)}</View></Pressable></Modal></View>); })()}
                                    </View>
                        </View>
                        <View style={styles.node_730810e0_4148_4851_b445_3899cd5803f8}>
                                    <Text style={styles.node_e9c20a4a_9a7c_429b_b4c1_1811ab20cb9d}>SEVERITY LEVEL</Text>
                                    <View style={styles.node_12826efb_9f87_49c9_b914_113db30572b8}>
                                                  <View style={styles.node_83bf8778_35c2_4c99_bd69_974f34d148ed}>
                                                                  <Text style={styles.node_01c85cb0_359a_4f62_8a8a_dbde2c3b6f75}>LOW</Text>
                                                  </View>
                                                  <View style={styles.node_892dbedc_b575_4398_9dd4_cd78fe548ab1}>
                                                                  <Text style={styles.node_d2b16445_282d_40b5_832f_25c07cb495ee}>MEDIUM</Text>
                                                  </View>
                                                  <View style={styles.node_d3a5e2aa_c408_428c_b9a1_6ccdef35017c}>
                                                                  <Text style={styles.node_b7aa6736_5443_40a1_bdc9_135b27eecf26}>HIGH</Text>
                                                  </View>
                                    </View>
                        </View>
                        <View style={styles.node_3cb7f6b7_d8a4_4184_a9b9_1c98e2e69668}>
                                    <Text style={styles.node_f10428fc_061f_4467_af11_da43187c6cc9}>DESCRIPTION</Text>
                                    <TextInput style={[styles.node_797415ac_0c0a_45e8_a47e_f8bafc22dc0a, { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 14, padding: 10, fontSize: 16, minHeight: 80, textAlignVertical: 'top', backgroundColor: '#FFFFFF' }]} placeholder="Describe the issue..." multiline value={typeof state_797415ac_0c0a_45e8_a47e_f8bafc22dc0a !== 'undefined' ? (state_797415ac_0c0a_45e8_a47e_f8bafc22dc0a.text ?? '') : ''} onChangeText={(v) => { if (typeof setState_797415ac_0c0a_45e8_a47e_f8bafc22dc0a === 'function') setState_797415ac_0c0a_45e8_a47e_f8bafc22dc0a(prev => ({...prev, text: v})); }} />
                        </View>
                        <View style={styles.node_8b6b6468_47ee_4837_92a5_40426f133002}>
                                    <Text style={styles.node_7b943a9d_1a1c_4c4d_b671_1337a89dcb39}>PHOTO EVIDENCE</Text>
                                    <View style={styles.node_9b3c6bc1_c21a_43e9_9d5f_0a0984795307}>
                                                  <View style={styles.node_09e4f1ee_3187_49c2_b7be_27101a8ebef0}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#3B82F6" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></Path><Circle cx="12" cy="13" r="3"></Circle></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_0609c791_29d1_4651_a561_f7b19db3a077}>
                                                                  <Text style={styles.node_529a0fcc_890b_4b96_9d5b_0c5685c93809}>Tap to capture photo</Text>
                                                                  <Text style={styles.node_ecb2fedb_3112_4e90_b85d_815e6c9112f2}>JPG · PNG · up to 10 MB</Text>
                                                  </View>
                                    </View>
                        </View>
                        <View style={styles.node_cb57d2ee_e87d_4570_8718_11c919c9c42f}>
                                    <Text style={styles.node_a81474c6_2c88_4585_a11a_53f5ab79da54}>ASSIGN TO</Text>
                                    {(() => { const __opts = [{"label":"Floor Supervisor — J. Malik","value":"jmalik"},{"label":"Zone Lead — R. Chen","value":"rchen"},{"label":"Safety Officer","value":"safety"}]; const [open, setOpen] = React.useState(false); const [anchor, setAnchor] = React.useState({x:0,y:0,w:0,h:0}); const triggerRef = React.useRef(null); const val = typeof state_0c00a91f_85a9_4ed9_bbf5_549ab562e993 !== 'undefined' ? (state_0c00a91f_85a9_4ed9_bbf5_549ab562e993.selectedValue ?? '') : ''; const __sel = __opts.find(o => o.value === val); const __label = __sel ? __sel.label : ''; const openDropdown = () => { if (triggerRef.current && triggerRef.current.measureInWindow) { triggerRef.current.measureInWindow((x,y,w,h) => { setAnchor({x,y,w,h}); setOpen(true); }); } else { setOpen(true); } }; return (<View style={styles.node_0c00a91f_85a9_4ed9_bbf5_549ab562e993}><TouchableOpacity ref={triggerRef} onPress={() => { if (open) { setOpen(false); } else { openDropdown(); } }} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}><Text style={{ color: val ? '#000' : '#888' }}>{__label || 'Floor Supervisor — J. Malik'}</Text><Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transform: [{ rotate: open ? '180deg' : '0deg' }] }}><Path d="m6 9 6 6 6-6" /></Svg></TouchableOpacity><Modal visible={open} transparent animationType="fade" onRequestClose={() => { setOpen(false); }}><Pressable style={{ flex: 1 }} onPress={() => { setOpen(false); }}><View style={{ position: 'absolute', top: anchor.y + anchor.h + 4, left: anchor.x, width: anchor.w, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 6, elevation: 8, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}>{__opts.map((o, i) => <TouchableOpacity key={o.value + ':' + i} onPress={() => { if (typeof setState_0c00a91f_85a9_4ed9_bbf5_549ab562e993 === 'function') setState_0c00a91f_85a9_4ed9_bbf5_549ab562e993(prev => ({...prev, selectedValue: o.value, selectedLabel: o.label})); setOpen(false); }} style={{ padding: 10, borderBottomWidth: i < __opts.length - 1 ? 1 : 0, borderColor: '#eee' }}><Text>{o.label}</Text></TouchableOpacity>)}</View></Pressable></Modal></View>); })()}
                        </View>
              </View>
              <View style={styles.node_f0dc886f_0cd9_4ab1_8e71_bd3ea3c13810}>
                        <TouchableOpacity style={[styles.node_959a6fd5_e08b_4f29_a251_9d75044c77b3, { backgroundColor: 'transparent', borderRadius: 14, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#0077E6', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                          <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#0077E6', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.node_3ed3035b_1fbb_4ca4_9c5e_1460cb841193, { backgroundColor: '#4338CA', borderRadius: 14, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                          <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Submit Report</Text>
                        </TouchableOpacity>
              </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: '#F1F3F9',
  },
  container: {
    flex: 1,
    backgroundColor: '#F1F3F9',
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
  },
  containerContent: {
    width: '100%',
    alignSelf: 'stretch',
  },
  node_45c22851_c84a_40e5_bdd2_d95f5246137f: {
    gap: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_b0694176_4110_499e_bdb1_ccf54bc50b12: {
    gap: 8,
    paddingTop: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  node_93b34916_18a2_4688_93e4_2480face708b: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_8296d560_c77b_45e7_a3b5_fb93dfb1845f: {
    color: '#3B82F6',
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_01c34a92_0874_4b20_9f1f_d8d0c8ca5b45: {
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_6a7238f2_fbdd_4486_b8dd_27211e86e7ae: {
    color: '#111827',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_ee5f6d57_ffaf_4dc9_b080_79c170e9abb3: {
    gap: 6,
    paddingTop: 6,
    borderColor: '#FED7AA',
    borderWidth: 1.5,
    paddingLeft: 12,
    borderRadius: 20,
    paddingRight: 12,
    paddingBottom: 6,
    backgroundColor: '#FFF7ED',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_eaef513f_1fa5_4c3a_974c_7545faf36626: {
    color: '#F97316',
    fontWeight: '700',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_cd910b2c_68b3_4834_8b18_be282340c771: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_4a7698eb_9e9b_4654_9f41_c3f6dc9216da: {
    gap: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_fa271c1b_05f0_48e1_a69e_e15e799ae543: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_60dd2ab8_5bbd_4557_88c2_6aaf29146706: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_970bf5f3_3543_497f_a33f_6b4e3e1935b7: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  node_e053751d_1040_43a1_9221_adb0cb9cbfa8: {
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  node_b0f06960_d737_49c0_9c88_6f1f03c60ad8: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_c863ab7d_ecbb_41de_b7da_9f099b0536d0: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  node_03f4cc97_ec62_4fc7_8ddf_bab027593baa: {
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  node_730810e0_4148_4851_b445_3899cd5803f8: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_e9c20a4a_9a7c_429b_b4c1_1811ab20cb9d: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  node_12826efb_9f87_49c9_b914_113db30572b8: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_83bf8778_35c2_4c99_bd69_974f34d148ed: {
    paddingTop: 12,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 14,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_01c85cb0_359a_4f62_8a8a_dbde2c3b6f75: {
    color: '#9CA3AF',
    fontWeight: '700',
    fontSize: 14,
  },
  node_892dbedc_b575_4398_9dd4_cd78fe548ab1: {
    paddingTop: 12,
    borderColor: '#F97316',
    borderWidth: 2,
    borderRadius: 14,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_d2b16445_282d_40b5_832f_25c07cb495ee: {
    color: '#F97316',
    fontWeight: '700',
    fontSize: 14,
  },
  node_d3a5e2aa_c408_428c_b9a1_6ccdef35017c: {
    paddingTop: 12,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 14,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_b7aa6736_5443_40a1_bdc9_135b27eecf26: {
    color: '#9CA3AF',
    fontWeight: '700',
    fontSize: 14,
  },
  node_3cb7f6b7_d8a4_4184_a9b9_1c98e2e69668: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_f10428fc_061f_4467_af11_da43187c6cc9: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  node_797415ac_0c0a_45e8_a47e_f8bafc22dc0a: {
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  node_8b6b6468_47ee_4837_92a5_40426f133002: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_7b943a9d_1a1c_4c4d_b671_1337a89dcb39: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  node_9b3c6bc1_c21a_43e9_9d5f_0a0984795307: {
    gap: 12,
    paddingTop: 16,
    borderColor: '#93C5FD',
    borderWidth: 1.5,
    paddingLeft: 16,
    borderRadius: 14,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#EFF6FF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_09e4f1ee_3187_49c2_b7be_27101a8ebef0: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_0609c791_29d1_4651_a561_f7b19db3a077: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_529a0fcc_890b_4b96_9d5b_0c5685c93809: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_ecb2fedb_3112_4e90_b85d_815e6c9112f2: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_cb57d2ee_e87d_4570_8718_11c919c9c42f: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_a81474c6_2c88_4585_a11a_53f5ab79da54: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1.5,
    fontSize: 12,
  },
  node_0c00a91f_85a9_4ed9_bbf5_549ab562e993: {
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  node_f0dc886f_0cd9_4ab1_8e71_bd3ea3c13810: {
    gap: 12,
    paddingTop: 20,
    borderColor: '#E5E7EB',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_959a6fd5_e08b_4f29_a251_9d75044c77b3: {
    borderRadius: 14,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_3ed3035b_1fbb_4ca4_9c5e_1460cb841193: {
    borderRadius: 14,
    backgroundColor: '#4338CA',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
});

